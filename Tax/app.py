from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/calculate_tax', methods=['POST'])
def calculate_tax():
    income = float(request.form['income'])
    tax_rate = float(request.form['tax_rate'])
    
    tax = income * (tax_rate / 100)
    
    return render_template('result.html', income=income, tax_rate=tax_rate, tax=tax)

if __name__ == '__main__':
    app.run(debug=True)
