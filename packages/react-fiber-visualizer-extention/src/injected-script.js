window.postMessage({
  greeting: 'hello there!',
  source: 'my-devtools-extension'
}, '*')

function getFiberRoot() {
  const fiberRoots = __REACT_DEVTOOLS_GLOBAL_HOOK__.getFiberRoots(1);
  let fiberRoot = null;
  fiberRoots.forEach(r => fiberRoot = r);
  return fiberRoot;
}

window.addEventListener('message', (event) => {
  if (event.source !== window) {
    return;
  }
  var message = event.data;

  
  if (message.source === 'content-script') {
    const fiberRoot = getFiberRoot();
    const snapshoot = getSnapshootOfFiberTree(fiberRoot);
    // 不展示alternate, 现在能获取到渲染完成之后的fiber树，current和alternate都是一样
    snapshoot.alternateTree = null;
    window.postMessage({
      snapshoot: snapshoot,
      source: 'injected-script'
    }, '*')
  }
})

/**  ----------  fiberToTree   ---------------- **/

const tagMapText = {
  0: 'FunctionComponent',
  1: 'ClassComponent',
  2: 'IndeterminateComponent', // Before we know whether it is function or class
  3: 'HostRoot', // Root of a host tree. Could be nested inside another node.
  4: 'HostPortal', // A subtree. Could be an entry point to a different renderer.
  5: 'HostComponent',
  6: 'HostText',
  7: 'Fragment',
  8: 'Mode',
  9: 'ContextConsumer',
  10: 'ContextProvider',
  11: 'ForwardRef',
  12: 'Profiler',
  13: 'SuspenseComponent',
  14: 'MemoComponent',
  15: 'SimpleMemoComponent',
  16: 'LazyComponent',
  17: 'IncompleteClassComponent',
  18: 'DehydratedFragment',
  19: 'SuspenseListComponent',
  20: 'FundamentalComponent',
  21: 'ScopeComponent',
  22: 'Block',
  23: 'OffscreenComponent',
  24: 'LegacyHiddenComponent',

};


function processFlags(flags) {
  const map = {
    NoFlags: /*                      */ 0b000000000000000000,
    PerformedWork: /*                */ 0b000000000000000001,
  
    // You can change the rest (and add more).
    Placement: /*                    */ 0b000000000000000010,
    Update: /*                       */ 0b000000000000000100,
    PlacementAndUpdate: /*           */ 0b000000000000000110,
    Deletion: /*                     */ 0b000000000000001000,
    ContentReset: /*                 */ 0b000000000000010000,
    Callback: /*                     */ 0b000000000000100000,
    DidCapture: /*                   */ 0b000000000001000000,
    Ref: /*                          */ 0b000000000010000000,
    Snapshot: /*                     */ 0b000000000100000000,
    Passive: /*                      */ 0b000000001000000000,
    // TODO (effects) Remove this bit once the new reconciler is synced to the old.
    PassiveUnmountPendingDev: /*     */ 0b000010000000000000,
    Hydrating: /*                    */ 0b000000010000000000,
    HydratingAndUpdate: /*           */ 0b000000010000000100,
  
    // Passive & Update & Callback & Ref & Snapshot
    LifecycleEffectMask: /*          */ 0b000000001110100100,
  
    // Union of all host effects
    HostEffectMask: /*               */ 0b000000011111111111,
  
    // These are not really side effects, but we still reuse this field.
    Incomplete: /*                   */ 0b000000100000000000,
    ShouldCapture: /*                */ 0b000001000000000000,
    ForceUpdateForLegacySuspense: /* */ 0b000100000000000000,
  };
  const flagNames = [];
  Object.entries(map).forEach(([flagName, flagValue]) => {
    if(flags & flagValue) {
      flagNames.push(flagName);
    }
  })
  return flagNames;
}

function dataProcessForStructuredClone(object){
  if(!object) return object;
  const isArray = object instanceof Array;
  const clone = isArray ? [] : {};
  Object.entries(object).forEach(([key, value]) => {
    if(typeof value === 'function') {
      clone[key] = `function: ${value.name}`;
    } else if(typeof value === 'symbol') {
      clone[key] = value.toString();
    } else if(value instanceof HTMLElement) {
      clone[key] = value.outerHTML;
    } else if(typeof value === 'object'){
      // 主要，不要有成环的数据结构
      clone[key] = dataProcessForStructuredClone(value);
    } else {
      console[key] = value;
    }
  });
  return clone;
}

function processStateNode(tag, stateNode) {
  switch (tag) {
    case 'ClassComponent':
      if (!stateNode) return stateNode;
      return {
        name: stateNode.constructor.name,
        context: stateNode.context,
        props: stateNode.props,
        refs: stateNode.refs,
        state:stateNode.state,
      };
    case 'HostComponent':
      return stateNode?.outerHTML;
    case 'HostRoot':
      return null;
    default:
      return stateNode;
  }  
}

function processEffects (fiber) {
  const { firstEffect, lastEffect } = fiber;
  let current = firstEffect;

  const effects = [];
  while (current) {
    effects.push(current._debugID);
    if(current._debugID === lastEffect._debugID) {
      break;
    }
    current = current.nextEffect;
  }
  return effects;
}


function processNextEffects(nextEffect) {
  let current = nextEffect;

  const effects = [];
  while (current) {
    effects.push(current._debugID);
    current = current.nextEffect;
  }
  return effects; 
}

function processUpdateQueue(updateQueue) {
  if (!updateQueue) return updateQueue;
  const { shared, firstBaseUpdate, lastBaseUpdate, lastEffect, ...rest } = updateQueue;
  const clone = {
    ...rest,
    _baseUpdateQueue: getBaseUpdateQueue(
      firstBaseUpdate,
      lastBaseUpdate,
    ),
    _lastEffect: getLastEffect(lastEffect),
  };
  if(shared) {
    const { pending, ...sharedRest } = shared;
    clone.shared = {
      pending: handlePendingQueue(pending),
      ...sharedRest
    };
  }
  function handlePendingQueue(pendingQueue) {
    let current = pendingQueue;
    let queue = [];
    while (current) {
      const { next, ...rest } = pendingQueue;
      queue.push({...rest});
      if(pendingQueue === next) break;
      current = next;
    }
    return queue;
  }

  function getBaseUpdateQueue(firstBaseUpdate, lastBaseUpdate) {
    const arr = [];
    let current = firstBaseUpdate;
    while (current) {
      const { next, ...rest} = current;
      arr.push({...rest});
      if(current === lastBaseUpdate) {break};
      current = next; 
    }
    return arr;

  }

  function getLastEffect(lastEffect) {
    const arr = [];
    let current = lastEffect;
    while (current) {
      const { next, ...rest} = current;
      arr.push({...rest});
      if(current === lastEffect) {break};
      current = next; 
    }
    return arr;
  }
  // return clone;
  return dataProcessForStructuredClone(clone);
}

function extractFiber(fiber) {
  return {
    id: fiber._debugID,
    tag: tagMapText[fiber.tag],
    lanes: fiber.lanes,
    childLanes: fiber.childLanes,
    elementType: typeof fiber.elementType === 'function' ?
      fiber.elementType.name :
      fiber.elementType,
    alternate: fiber.alternate?._debugID,
    flags: processFlags(fiber.flags),
    stateNode: processStateNode(tagMapText[fiber.tag], fiber.stateNode),
    effects: processEffects(fiber),
    nextEffects: processNextEffects(fiber.nextEffect),
    updateQueue: processUpdateQueue(fiber.updateQueue),
  };
}
function fiberToTree(rootFiber) {
  const  fibers = {};

  const tree = {
    id: rootFiber._debugID,
  };
  fibers[tree.id] = extractFiber(rootFiber);
  tree.children = getChildren(rootFiber);
  function getChildren(fiber) {
    let child = fiber.child;
    const children = [];

    while (child) {
      const node = {
        id: child._debugID,
        children: getChildren(child),
      };
      fibers[node.id] = extractFiber(child);
      children.push(node);
      child = child.sibling;
    }
    return children;
  }
  return { tree, fibers };
}

function getSnapshootOfFiberTree(fiberRoot) {
  //  HostRootFiber: fiber树的根节点
  const currentRootFiber = fiberRoot.current;
  const alternateRootFiber = currentRootFiber.alternate;


  const currentTree = fiberToTree(currentRootFiber);
  const alternateTree = fiberToTree(alternateRootFiber);


  const snapshoot = {
    currentTree,
    alternateTree,
    // workInProgress: workInProgress?._debugID, 
  };

  return snapshoot;
}