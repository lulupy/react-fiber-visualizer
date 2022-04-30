export default {
  "currentTree": {
    "tree": {
      "id": 1,
      "children": []
    },
    "fibers": {
      "1": {
        "id": 1,
        "tag": "HostRoot",
        "lanes": 1,
        "childLanes": 0,
        "elementType": null,
        "alternate": 1,
        "flags": [],
        "stateNode": null,
        "effects": [],
        "nextEffects": [],
        "updateQueue": {
          "baseState": null,
          "effects": null,
          "_baseUpdateQueue": [
            {
              "payload": {
                "element": {
                  "$$typeof": "Symbol(react.element)",
                  "type": "function: App",
                  "key": null,
                  "ref": null,
                  "props": {},
                  "_owner": null,
                  "_store": {}
                }
              },
              "callback": null
            }
          ],
          "_lastEffect": [],
          "shared": {
            "pending": []
          }
        }
      }
    }
  },
  "alternateTree": {
    "tree": {
      "id": 1,
      "children": [
        {
          "id": 4,
          "children": [
            {
              "id": 6,
              "children": [
                {
                  "id": 9,
                  "children": []
                },
                {
                  "id": 10,
                  "children": []
                }
              ]
            },
            {
              "id": 7,
              "children": []
            }
          ]
        }
      ]
    },
    "fibers": {
      "1": {
        "id": 1,
        "tag": "HostRoot",
        "lanes": 0,
        "childLanes": 0,
        "elementType": null,
        "alternate": 1,
        "flags": [],
        "stateNode": null,
        "effects": [],
        "nextEffects": [],
        "updateQueue": {
          "baseState": {
            "element": {
              "$$typeof": "Symbol(react.element)",
              "type": "function: App",
              "key": null,
              "ref": null,
              "props": {},
              "_owner": null,
              "_store": {}
            }
          },
          "effects": null,
          "_baseUpdateQueue": [],
          "_lastEffect": [],
          "shared": {
            "pending": []
          }
        }
      },
      "4": {
        "id": 4,
        "tag": "ClassComponent",
        "lanes": 0,
        "childLanes": 0,
        "elementType": "App",
        "flags": [
          "PerformedWork",
          "Placement",
          "Update",
          "PlacementAndUpdate",
          "HydratingAndUpdate",
          "LifecycleEffectMask",
          "HostEffectMask"
        ],
        "stateNode": {
          "name": "App",
          "context": {},
          "props": {},
          "refs": {},
          "state": null
        },
        "effects": [],
        "nextEffects": [],
        "updateQueue": {
          "baseState": null,
          "effects": null,
          "_baseUpdateQueue": [],
          "_lastEffect": [],
          "shared": {
            "pending": []
          }
        }
      },
      "6": {
        "id": 6,
        "tag": "ClassComponent",
        "lanes": 0,
        "childLanes": 0,
        "elementType": "Header",
        "flags": [
          "PerformedWork",
          "HostEffectMask"
        ],
        "stateNode": {
          "name": "Header",
          "context": {},
          "props": {},
          "refs": {},
          "state": null
        },
        "effects": [],
        "nextEffects": [],
        "updateQueue": {
          "baseState": null,
          "effects": null,
          "_baseUpdateQueue": [],
          "_lastEffect": [],
          "shared": {
            "pending": []
          }
        }
      },
      "7": {
        "id": 7,
        "tag": "ClassComponent",
        "lanes": 1,
        "childLanes": 0,
        "elementType": "List",
        "flags": [],
        "stateNode": null,
        "effects": [],
        "nextEffects": [],
        "updateQueue": null
      },
      "9": {
        "id": 9,
        "tag": "HostComponent",
        "lanes": 0,
        "childLanes": 0,
        "elementType": "h1",
        "flags": [],
        "stateNode": "<h1>title</h1>",
        "effects": [],
        "nextEffects": [],
        "updateQueue": null
      },
      "10": {
        "id": 10,
        "tag": "HostComponent",
        "lanes": 0,
        "childLanes": 0,
        "elementType": "h2",
        "flags": [],
        "stateNode": "<h2>title2</h2>",
        "effects": [],
        "nextEffects": [],
        "updateQueue": null
      }
    }
  },
  "workInProgress": 6,
  "note": "回溯阶段"
}