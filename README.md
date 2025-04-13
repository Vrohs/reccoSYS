# Medicine Recommendation System

A comprehensive machine learning-based system for medical diagnosis and personalized health recommendations.

## System Architecture & Working

### Model Integration

The Medicine Recommendation System leverages machine learning to predict diseases based on user symptoms and provide personalized recommendations. Here's how the model is integrated:

1. **Model Training (Medicine Recommendation System.ipynb)**
   - The model is trained using a Support Vector Machine (SVC) classifier
   - Multiple models were evaluated during development, including Random Forest, Gradient Boosting, KNN, and MultinomialNB
   - SVC with a linear kernel was selected for the final implementation due to its superior performance
   - The model is trained on a symptom-disease dataset with labeled pairs
   - Once trained, the model is serialized and saved as `model.pkl` in the app/models directory

2. **Model Loading (app/utils.py)**
   - The trained model is loaded using the `load_model()` function
   - The function includes a fallback mechanism to load from an alternate path if the primary path fails
   - This ensures robustness in different deployment environments

3. **Disease Prediction Pipeline**
   - Users input symptoms through the web interface (text-based or voice recognition)
   - The symptoms are preprocessed and converted into a feature vector
   - The model predicts the most likely disease based on the symptoms
   - The full pipeline is implemented in the `predict_disease()` function in utils.py

4. **Recommendation Generation**
   - Based on the predicted disease, the system retrieves:
     - Disease description
     - Recommended precautions
     - Medication suggestions
     - Dietary recommendations
     - Workout/exercise recommendations
   - This is handled by the `get_disease_details()` function in utils.py
   - Data is sourced from CSV files stored in the app/data directory

### Data Flow

1. **User Input → Processing → Prediction → Recommendations**
   - User submits symptoms via the web interface
   - Flask route `/predict` processes the input
   - Data is transformed into the format expected by the model
   - Model predicts the most likely disease
   - System fetches corresponding recommendations
   - Results are displayed to the user

### Backend Architecture

1. **Flask Application Structure**
   - `app/__init__.py`: Application factory pattern for initialization
   - `app/routes.py`: Defines all route endpoints and controllers
   - `app/utils.py`: Contains utility functions for model operations
   - `config.py`: Application configuration settings
   - `run.py`: Entry point for starting the application

2. **Routes & Controllers**
   - Home route (`/`): Displays the main symptom input form
   - Predict route (`/predict`): Processes symptoms and returns predictions
   - API route (`/api/symptoms`): Provides symptom data for the frontend
   - Additional informational routes: About, Contact, Developer, Blog

3. **Data Management**
   - Multiple CSV files store different types of health-related data:
     - Disease descriptions
     - Precautionary measures
     - Medication recommendations
     - Diet suggestions
     - Workout recommendations

### Frontend Implementation

1. **Templates**
   - Base template (layout.html) provides the common structure
   - Specialized templates for different views (index.html, results.html, etc.)
   - Modern, mobile-friendly interface

2. **Interactive Features**
   - Select2 integration for better symptom selection
   - Speech recognition for voice input of symptoms
   - Bootstrap 5 for responsive design
   - Modal dialogs for displaying detailed information

## Deployment Configuration

1. **Docker Deployment**
   - Dockerfile specifies Python 3.9 as the base image
   - Dependencies installed from requirements.txt
   - Gunicorn configured as the production WSGI server
   - Container exposes port 8080

2. **Cloud Deployment**
   - Google Cloud Run configuration via cloudbuild.yaml
   - Alternative deployment option via Heroku (using Procfile)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/medicine-recommendation-system.git
   cd medicine-recommendation-system
   ```

2. Create a virtual environment and activate it:
   ```
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install dependencies:
   ```
   pip install -r requirements.txt
   ```

4. Run the application:
   ```
   python run.py
   ```

5. Open your browser and navigate to:
   ```
   http://127.0.0.1:5000/
   ```

## Project Structure

```
medicine-recommendation-system/
├── app/                      # Application package
│   ├── static/               # Static assets
│   │   ├── css/              # CSS files
│   │   ├── js/               # JavaScript files with speech recognition feature
│   │   └── img/              # Image files
│   ├── templates/            # HTML templates
│   ├── models/               # ML models (model.pkl)
│   ├── data/                 # Dataset files (CSV)
│   ├── __init__.py           # App initialization
│   ├── routes.py             # Route definitions
│   └── utils.py              # Utility functions for model operations
├── config.py                 # Configuration settings
├── Dockerfile                # Docker configuration
├── cloudbuild.yaml           # Google Cloud Run config
├── Procfile                  # Heroku configuration
├── requirements.txt          # Dependencies
└── run.py                    # Application entry point
```

## Features

- **Symptom Analysis**: Enter symptoms through text or voice input
- **Disease Prediction**: AI-powered disease prediction based on symptoms
- **Personalized Recommendations**:
  - Medication recommendations
  - Precautionary measures
  - Dietary suggestions
  - Exercise/workout recommendations
- **Responsive Design**: Works on desktops, tablets, and mobile devices
- **Voice Input**: Speech recognition for symptom entry

## Tech Stack

- **Backend**: Flask (Python)
- **Frontend**: HTML, CSS, JavaScript, Bootstrap 5
- **Machine Learning**: Scikit-learn, SVC (Support Vector Classification)
- **Data Processing**: Pandas, NumPy
- **Deployment**: Docker, Google Cloud Run, Heroku

## Disclaimer

This application is for educational and informational purposes only. It should not be considered medical advice, diagnosis, or treatment. Always consult with a qualified healthcare provider for medical advice.

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Acknowledgments

- Medical datasets providers
- Open source libraries and frameworks
- Contributors and medical advisors

