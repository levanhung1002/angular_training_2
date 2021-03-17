import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Item} from '../item';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  @Input() item: Item;

  @Input() lastItem: boolean;

  @Output() addItem = new EventEmitter<Item>();

  @Output() deleteItem = new EventEmitter<Item>();

  @Output() removeItem = new EventEmitter<Item>();

  constructor() {
  }

  ngOnInit(): void {
  }


  handleAddItem(): void {
    this.addItem.emit(this.item);

  }

  handleDeleteItem(): void {
    this.deleteItem.emit(this.item);
  }


  handleRemoveItem(): void {
    this.removeItem.emit(this.item);
  }


}
