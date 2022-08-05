export default class Utils {
  static removeDuplicateObject(array: any[]): any[] {
    const idOfEachObject: any[] = array.map((object) => object.id);

    const filteredId: any[] = [...new Set(idOfEachObject)];

    const arrayOfObject: any[] = filteredId.map((id) => {
      return array.find((object) => object.id === id);
    });

    return arrayOfObject;
  }
}

/// ColumnNumericTransformer
export class ColumnNumericTransformer {
  to(data: number): number {
    return data;
  }
  from(data: string): number {
    return parseFloat(data);
  }
}
