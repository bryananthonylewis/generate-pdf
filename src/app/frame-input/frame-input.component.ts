import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FrameDataService } from '../frame-data.service';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-frame-input',
  templateUrl: './frame-input.component.html',
  styleUrls: ['./frame-input.component.scss']
})
export class FrameInputComponent implements OnInit {
  // Variables/Types
  registerForm: FormGroup;
  submitted = false;
  langCode: string;
  href = '';
  user = {
    name: 'Bryan',
    age: 62
  };

  // Constructor
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    public service: FrameDataService,
    private translate: TranslateService
  ) {
    // translation code - set default to english
    translate.setDefaultLang('en');
  }

  // OnInit
  ngOnInit() {
    // form builder
    this.registerForm = this.formBuilder.group({
      frame: ['', Validators.required]
    });

    // find parameters
    this.route.paramMap.subscribe(params => {
      console.log(params);
      console.log(params.get('lang'));
      const language = params.get('lang');
      if (language === 'en' || language === 'fr' || language === 'de') {
        this.langCode = language.toLowerCase();
        // translation code
        this.translate.use(this.langCode);
      }
    });

    // get url
    this.href = this.router.url;
    console.log('href = ' + this.router.url);
  } // onInit()

  // translation - change lang
  switchLanguage(language: string) {
    this.translate.use(language);
  } // switchLanguage

  // Convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  } // f()

  // onSubmit - check validation
  onSubmit() {
    this.submitted = true;

    // Invalid - stop here if form is invalid
    if (this.registerForm.invalid) {
      // take to not found page
      // this.router.navigate(['/frame/not-found']);

      // return false
      return;
    }

    // Get input text, place in variable
    const inputValue = this.registerForm.get('frame').value;
    // console.log(inputValue);

    // Success call API
    alert('SUCCESS!');
    this.service.getFrameData(inputValue);
  } // onSubmit()
}
