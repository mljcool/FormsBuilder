import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewEncapsulation,
  Input,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiService } from '../services/api.service';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../components/dialog/dialog.component';

const promise = () =>
  new Promise((resolve, reject) => {
    reject(false);
  });

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormBuilderComponent implements OnInit {
  data$!: Observable<any[]>;
  dataSimple: any[] = [];
  dataSimple2: any[] = [];

  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions!: Observable<string[]>;

  @ViewChild('item') item: any;

  @Input() public simpleTitle: string = '';
  @Input() public dataSample: any[] = [];

  constructor(
    private apiSrvc: ApiService,
    private cd: ChangeDetectorRef,
    private el: ElementRef,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    // debugger;
    // setTimeout(() => {
    //   console.error('SAMPLE');
    // }, 1550);
    // this.filteredOptions = this.myControl.valueChanges.pipe(
    //   startWith(''),
    //   map((value) => this._filter(value || ''))
    // );
    // console.log('YES!');
    // this.getData();
    // this.cd.detectChanges();
    
  }

  debugMe(){
      setTimeout(() => {
          throw new Error('NEW ERROR!');
    }, 1550);
  }


  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

  @Input() public log = () => console.log(this);

  getData() {
    this.apiSrvc.getAPIPlaceholder().subscribe((response: any) => {
      console.log('getAPIPlaceholder',  response);
      this.data$ = of(response);
      this.dataSimple = response;
      this.cd.detectChanges();
    });

    promise()
      .then(() => {
        console.log('success');
      })
      .catch((error) => {
        console.error('im here', error);
      });
    this.customEmit();
    console.log(this);
  }

  private customEmit() {
    const domEvent = new CustomEvent('form-builder');
    console.log(domEvent.detail);
    this.el.nativeElement.dispatchEvent(domEvent);
  }
}
