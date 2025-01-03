# ImageCrudApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.6.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

# Image CRUD App with Angular

This is a simple Angular application that allows users to perform CRUD (Create, Read, Update, Delete) operations on images. Users can upload images, crop them using the `ngx-image-cropper` library, and manage image details such as title, description, and display status.

## Features

- **Add Image**: Upload an image, crop it, and add details like title, description, and display status.
- **List Images**: View a list of all images with their details.
- **Edit Image**: Update image details or replace the image with a new one.
- **Delete Image**: Remove an image from the list.
- **Image Cropping**: Use the `ngx-image-cropper` library to crop images before saving.

## Technologies Used

- **Angular 18**: Frontend framework for building the application.
- **ngx-image-cropper**: Library for cropping images.
- **HTML/CSS**: For structuring and styling the app.
- **TypeScript**: For writing the application logic.

## Prerequisites

Before running the app, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [Angular CLI](https://angular.io/cli) (v18 or higher)
- A modern web browser (e.g., Chrome, Firefox, Edge)

## Setup Instructions

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/your-username/image-crud-app.git
   cd image-crud-app

   ```

2. **Install Dependencies:**:

   ```bash
   npm install

   ```

3. **Run the Application:**:

   ```bash
   ng serve
   ```

4. **Access the App:**:

   Open your browser and navigate to <http://localhost:4200>.

## Project Structure

src/
├── app/
│ ├── components/
│ │ ├── image-list/ # Component for listing images
│ │ ├── image-add/ # Component for adding a new image
│ │ └── image-edit/ # Component for editing an existing image
│ ├── models/
│ │ └── image.model.ts # Image model definition
│ ├── services/
│ │ └── image.service.ts # Service for CRUD operations
│ ├── app.routes.ts # Application routes
│ └── app.component.ts # Root component
├── assets/ # Static assets (e.g., images)
└── styles.css # Global styles

## Usage

### Add an Image

1. Click the "Add New Image" button on the home page.

2. Upload an image and crop it using the image cropper.

3. Fill in the title, description, and display status.

4. Click "Save" to add the image.

### Edit an Image

1. Click the "Edit" button next to an image in the list.

2. Update the image or its details.

3. Click "Save" to apply the changes.

### Delete an Image

1. Click the "Delete" button next to an image in the list.

2. The image will be removed from the list.

### Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.

2. Create a new branch for your feature or bugfix.

3. Commit your changes and push them to your branch.

4. Submit a pull request.

### License

This project is licensed under the MIT License. See the [LICENSE](https://chat.deepseek.com/a/chat/s/LICENSE) file for details.

### Acknowledgments

- [ngx-image-cropper](https://github.com/Mawi137/ngx-image-cropper) for the image cropping functionality.

- [Angular](https://angular.io/) for the framework.
