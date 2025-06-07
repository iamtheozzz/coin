from flask import Flask, render_template, request, jsonify
import firebase_admin
from firebase_admin import credentials, firestore
import json
import os
from dotenv import load_dotenv

# Load environment variables from .env (for local dev)
load_dotenv()

# Initialize Flask app
app = Flask(__name__)

# Initialize Firebase from environment variable
service_account_json = os.getenv("GOOGLE_APPLICATION_CREDENTIALS_JSON")

if service_account_json:
    # Write JSON string from env variable to a temp file
    with open("temp_service_account.json", "w") as f:
        f.write(service_account_json)
    cred = credentials.Certificate("temp_service_account.json")
    firebase_admin.initialize_app(cred)
    db = firestore.client()
else:
    raise ValueError("Environment variable 'GOOGLE_APPLICATION_CREDENTIALS_JSON' is missing")

# Flask secret key config
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY', 'your-secret-key-here')

# Routes
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/data', methods=['GET'])
def get_data():
    # Example: fetch all docs from a collection
    data = db.collection('your_collection').get()
    return jsonify([doc.to_dict() for doc in data])

@app.route('/calcoin')
def calcoin():
    return render_template('calcoin.html')

@app.route('/market')
def market():
    return render_template('market.html')

@app.route('/messages')
def messages():
    return render_template('messages.html')

@app.route('/bank')
def bank():
    return render_template('bank.html')

@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/signup')
def signup():
    return render_template('signup.html')

# Error handlers
@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

@app.errorhandler(500)
def internal_server_error(e):
    return render_template('500.html'), 500

if __name__ == '__main__':
    app.run(debug=True)
