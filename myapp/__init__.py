from flask import Flask, request, render_template


def create_app():
    app = Flask(__name__, static_url_path='/static')
    app.secret_key = "Sq88;&3’m"
    from .routes import bp  # Assuming you have a 'routes.py' file
    app.register_blueprint(bp)

    return app
