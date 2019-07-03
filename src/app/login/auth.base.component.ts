import { Component, ViewChild, ElementRef, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
    selector: 'auth-base',
    encapsulation: ViewEncapsulation.Emulated,
    templateUrl: './auth.base.component.html',
    styleUrls: ['./login.css']
})
export class AuthenticationBaseComponent implements OnInit {

    @ViewChild('openForm') openFormModal: ElementRef<HTMLInputElement>;

    ngOnInit(): void {
        this.openFormModal.nativeElement.click();
    }
}