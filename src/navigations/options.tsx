export interface headerOptionsPropType {
  title: string;
  extended?: boolean;
}

export const headerOptions = (title: string, extended = false): headerOptionsPropType => {
  return {
    title,
    extended,
    // headerStyle: { height: extended ? DIMENSIONS.HEADER_EXTENDED_HEIGHT : DIMENSIONS.HEADER_HEIGHT },
  }
}
