from flask import Flask, jsonify, render_template
from flask_cors import CORS

# app instance
app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return jsonify({
        'message': "Hello! <h1>Heading 1</h1>"
    })

if __name__ == "__main__":
    app.run(debug=True, port=8080)