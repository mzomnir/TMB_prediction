from flask import Flask, request, jsonify
from sklearn import svm
from sklearn import datasets
from sklearn.externals import joblib

# declare constants
HOST = '0.0.0.0'
PORT = 8081

# initialize flask application
app = Flask(__name__)

# (mzomnir) Don't need to train the model; we'll upload a pre-trained one
# @app.route('/api/train', methods=['POST'])
# def train():
#     # get parameters from request
#     parameters = request.get_json()

#     # read iris data set
#     iris = datasets.load_iris()
#     X, y = iris.data, iris.target

#     # fit model
#     clf = svm.SVC(C=float(parameters['C']),
#                   probability=True,
#                   random_state=1)
#     clf.fit(X, y)

#     # persist model
#     joblib.dump(clf, 'model.pkl')

#     return jsonify({'accuracy': round(clf.score(X, y) * 100, 2)})


@app.route('/api/predict', methods=['POST'])
def predict():
    # get iris object from request
    X = request.get_json()
    X = [[float(X['nmut_TTN']), float(X['nmut_LRP1B']), float(X['nmut_CSMD3']), float(X['nmut_PAPPA2']),
    float(X['nmut_TP53']), float(X['nmut_EGFR']), float(X['nmut_KRAS']), float(X['nmut_EGFR_exons18to21']),
    float(X['nmut_KRAS_hotspots'])]]
    # read model
    clf = joblib.load('tmb-model.pkl')
    # (mzomnir) need to convert the above array X to a form ingestible by the classifier
    probabilities = clf.predict_proba(X)

    return jsonify([{'name': 'Low', 'value': round(probabilities[0, 0] * 100, 2)},
                    {'name': 'High', 'value': round(probabilities[0, 1] * 100, 2)},])


if __name__ == '__main__':
    # run web server
    app.run(host=HOST,
            debug=True,  # automatic reloading enabled
            port=PORT)
