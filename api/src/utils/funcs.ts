import * as bcrypt from 'bcrypt';
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

// Date format
export const date = () => {
  const options: any = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
  };

  return new Intl.DateTimeFormat('fr-FR', options).format(new Date());
};

export async function encryptedPassword(password: string) {
  const encryptedPassword = await bcrypt.hash(password, 10);
  return encryptedPassword;
}

export async function compare(pass1: string, pass2: string) {
  const match = bcrypt.compare(pass1, pass2);
  return match;
}
