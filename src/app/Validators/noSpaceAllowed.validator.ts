import { FormControl,ValidationErrors } from "@angular/forms";

export class CustomValidators {
    static noSpaceAllowed(control: FormControl):ValidationErrors | null {
        if(control.value != null && control.value.indexOf(' ') != -1){
            return {
                noSpaceAllowed: true
            }
        }
        return null;
    }
}