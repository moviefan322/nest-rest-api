import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
  private readonly items: Item[] = [
    {
      id: '343434',
      name: 'Item 1',
      description: 'This is item 1',
      qty: 100,
    },
    {
      id: '454545',
      name: 'Item 2',
      description: 'This is item 2',
      qty: 50,
    },
    {
      id: '565656',
      name: 'Item 3',
      description: 'This is item 3',
      qty: 200,
    },
  ];

  findAll(): Item[] {
    return this.items;
  }

  findOne(id: string): Item {
    return this.items.find((item) => item.id === id);
  }
}
