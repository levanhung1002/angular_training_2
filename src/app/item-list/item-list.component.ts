import {Component, OnInit} from '@angular/core';
import {Item} from '../item';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  items: Item[] = [
    {
      id: 'ui1',
      name: 'Osmond ArmChair',
      amount: 1,
      price: 149.99,
      color: 'Gunnared biege',
      img: 'assets/images/Osmond.jpg'
    },
    {
      id: 'ui2',
      name: 'Meryl Lounge Chair',
      amount: 1,
      price: 169.99,
      color: 'Lysed bright green',
      img: 'assets/images/MerylLoungeChair.jpg'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  handleAddItem(item: Item): void {
    if (!this.items.some((value: Item) => value.id === item.id)) {
      this.items.push(item);
    } else {
      this.items.find((e: Item) => e.id === item.id).amount++;
    }
  }

  handleDeleteItem(item: Item): void {
    const itemDeleted = this.items.find((e: Item) => e.id === item.id);
    if (itemDeleted.amount === 1) {
      this.handleRemoveItem(item);
    } else if (itemDeleted.amount > 1) {
      itemDeleted.amount--;
    }
  }

  handleRemoveItem(item: Item): void {

    const index = this.items.findIndex((e: Item) => e.id === item.id);
    this.items.splice(index, 1);

  }

}
