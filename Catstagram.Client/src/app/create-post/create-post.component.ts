import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CatService } from '../services/cat.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss'],
})
export class CreatePostComponent {
  public catForm: FormGroup;

  constructor(private fb: FormBuilder, private catService: CatService) {
    this.catForm = this.fb.group({
      imageUrl: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  get imageUrl() {
    return this.catForm.get('imageUrl');
  }

  get description() {
    return this.catForm.get('description');
  }

  public onCreated() {
    this.catService.create(this.catForm.value).subscribe((res) => {
      console.log('inside subscribe')
      console.log(res);
    });
  }
}
