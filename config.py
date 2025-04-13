import os

class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'hard-to-guess-string'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    DATA_FOLDER = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'app', 'data')
    MODEL_FOLDER = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'app', 'models')
