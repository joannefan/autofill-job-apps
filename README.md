# autofill-job-apps

On a random Friday afternoon I decided it was time to start automating more parts
of the job application process. So I wrote this Firefox extension 
to automatically fill in Workday job application forms. For now, it
fills in work experience entries based on predefined data from my resume. 
Specifically, it
- Automatically fills in job title, company, location, and job description fields.
- Shows a popup interface that allows me to choose whether or not to apply the extension and autofill the form.

(I'm sure other people have one this, but I wanted to see for myself what creating an extension involves.)

### Next steps:

- The text is filled in but I still need to click on the input box to proceed in the application.
- Autofill start and end date

### Steps to add the extension (for me):

Open Firefox and load the `about:debugging` page. Click `Load Temporary Add-on` and select the `manifest.json` file within the folder of the extension.

### More Resources:

https://github.com/mdn/webextensions-examples

https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Examples