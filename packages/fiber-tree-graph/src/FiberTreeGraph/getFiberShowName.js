const _getFiberShowName = (fiber) => {
  switch(fiber.tag) {
    case 'ClassComponent':
      return fiber.elementType;
    case 'HostComponent':
      return `\"${fiber.elementType}\"`;
    case 'FunctionComponent':
      return fiber.elementType;
    default:
      return fiber.tag;
  }
}

const getFiberShowName = (fiber) => {
  const name = _getFiberShowName(fiber);
  return `${fiber.id}:${name}`
}

export default getFiberShowName;