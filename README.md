# Medicine Recommendation System

A comprehensive machine learning-based system for medical diagnosis and personalized health recommendations.

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
- **Machine Learning**: Scikit-learn
- **Data Processing**: Pandas, NumPy

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
│   │   ├── js/               # JavaScript files
│   │   └── img/              # Image files
│   ├── templates/            # HTML templates
│   ├── models/               # ML models
│   ├── data/                 # Dataset files
│   ├── __init__.py           # App initialization
│   ├── routes.py             # Route definitions
│   └── utils.py              # Utility functions
├── config.py                 # Configuration
├── requirements.txt          # Dependencies
└── run.py                    # Application entry point
```

## Usage

1. Navigate to the homepage
2. Enter your symptoms using text input or the voice recognition feature
3. Click "Analyze Symptoms" to get your diagnosis
4. View detailed results including:
   - Predicted disease/condition
   - Description of the condition
   - Recommended medications
   - Precautionary measures
   - Dietary recommendations
   - Workout suggestions

## Data Sources

- Disease-Symptom datasets
- Medical knowledge bases for treatment recommendations

## Future Enhancements

- User accounts for tracking health history
- Integration with wearable health devices
- Telemedicine connection options
- Location-based doctor recommendations
- Multilingual support

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Disclaimer

This application is for educational and informational purposes only. It should not be considered medical advice, diagnosis, or treatment. Always consult with a qualified healthcare provider for medical advice.

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Acknowledgments

- Medical datasets providers
- Open source libraries and frameworks
- Contributors and medical advisors
