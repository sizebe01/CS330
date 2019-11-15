#import requests
from flask import Flask, request, render_template, send_from_directory
from flask import redirect, url_for
import records

app = Flask(__name__)

data = records.Database("postgresql://sizebe01:@knuth.luther.edu/world")

@app.route('/')
def index():
    
    return render_template("index.html")


@app.route('/country', methods=['GET', 'POST'])
def country():
    #Getting Country Names for dropdown menu
    dropdown_menu = data.query("select code, name from country")
    #Creating Query from form
    if request.method == 'POST':
        code = request.form['code']
        rows = data.query("select * from country join city on country.capital = city.id where code='" + code + "' ")
        return render_template("results.html", code=code, dropdown=dropdown_menu, results=rows.all())
    #Populate Dropdown
    return render_template("results.html", dropdown=dropdown_menu.all())


@app.route('/region', methods=['GET', 'POST'])
def region():
    dropdown_menu = data.query("select distinct region, region as region from country")

    if request.method == 'POST':
        code = request.form['code']
        rows = data.query("select *, city.name as capitalname from country left join city on country.capital = city.id where region='" + code + "' ")
        return render_template("results.html", code=code, dropdown=dropdown_menu.all(), results=rows.all())
    return render_template("results.html", dropdown=dropdown_menu.all())

@app.route('/continent', methods=['GET', 'POST'])
def continent():
    dropdown_menu = data.query("select distinct continent, continent as continent from country")

    if request.method == 'POST':
        code = request.form['code']
        rows = data.query("select *, city.name as capitalname from country left join city on country.capital = city.id where continent='" + code + "' ")
        return render_template("results.html", code=code, dropdown=dropdown_menu.all(), results=rows.all())
    return render_template("results.html", dropdown=dropdown_menu.all())




if __name__ == '__main__':
    app.run(debug=True)