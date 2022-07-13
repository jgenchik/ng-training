import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function createPasswordsMatchValidator(): ValidatorFn {

    return (control: AbstractControl): ValidationErrors | null => {

        const password = control.get('password');
        const verifyPassword = control.get('verifyPassword');

        return password?.value != verifyPassword?.value ? {passwordsNotMatch: true} : null;

    }

}