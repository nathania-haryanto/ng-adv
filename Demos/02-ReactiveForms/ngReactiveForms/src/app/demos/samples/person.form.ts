import { FormControl, FormGroup } from '@angular/forms';

//not necessary but makes the form type
export const PersonFormType = FormGroup<{
    name: FormControl<string | null>,
    age: FormControl<number | null>,
    email: FormControl<string | null>,
    gender: FormControl<'male' | 'female' | 'not set' | null>,
    wealth: FormControl<string | null>
}>