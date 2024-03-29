"use client"

import { CKEditor } from '@ckeditor/ckeditor5-react';
import CustomEditor from 'ckeditor5-custom-build'

const editorConfiguration = {

  toolbar: [
    'heading',
    '|',
    'bold', 'italic', 'link', 'bulletedList', 'numberedList',
    '|',
    'fontFamily',
    'fontSize',
    'fontColor',

    '|',
    'alignment:left', 'alignment:right', 'alignment:center', 'alignment:justify'

  ],
  heading: {
    options: [
      { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
      { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
      { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
      { model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' },
      { model: 'heading4', view: 'h4', title: 'Heading 4', class: 'ck-heading_heading4' },
      { model: 'heading5', view: 'h5', title: 'Heading 5', class: 'ck-heading_heading5' },
      { model: 'heading6', view: 'h6', title: 'Heading 6', class: 'ck-heading_heading6' }
    ]
  },
}

export default function Editor() {
  return (
    <div className="w-full min-h-screen" >
      <CKEditor
        editor={CustomEditor}
        //@ts-ignore
        config={editorConfiguration}
        data="<p>Hello from CKEditor&nbsp;5!</p>"
        onChange={(event) => {
          // console.log(event);
        }}
      />
    </div>
  );
}