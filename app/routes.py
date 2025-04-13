from flask import Blueprint, render_template, request, redirect, url_for, flash, jsonify
from app.utils import load_symptoms, predict_disease, get_disease_details

main_bp = Blueprint('main', __name__)

@main_bp.route('/', methods=['GET'])
def index():
    symptoms = load_symptoms()
    return render_template('index.html', symptoms=symptoms)

@main_bp.route('/predict', methods=['POST'])
def predict():
    if request.method == 'POST':
        symptoms = request.form.get('symptoms')
        
        if not symptoms or symptoms == "Symptoms":
            return render_template('index.html', message="Please enter valid symptoms")
        
        user_symptoms = [s.strip() for s in symptoms.split(',')]
        user_symptoms = [symptom.strip("[]' ") for symptom in user_symptoms]
        
        disease = predict_disease(user_symptoms)
        description, precautions, medications, diets, workouts = get_disease_details(disease)
        
        return render_template('results.html', 
                              disease=disease, 
                              description=description, 
                              precautions=precautions, 
                              medications=medications, 
                              diets=diets, 
                              workouts=workouts)

@main_bp.route('/about')
def about():
    return render_template('about.html')

@main_bp.route('/contact')
def contact():
    return render_template('contact.html')

@main_bp.route('/developer')
def developer():
    return render_template('developer.html')

@main_bp.route('/blog')
def blog():
    return render_template('blog.html')

@main_bp.route('/api/symptoms', methods=['GET'])
def get_symptoms():
    symptoms = load_symptoms()
    return jsonify(symptoms)
