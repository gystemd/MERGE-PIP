import json
import matplotlib.pyplot as plt

with open('measurements/pip.json') as f:
    data = json.load(f)

# extract the measurements array
measurements = data['measurements']

# compute the mean of the measurements
mean = sum(measurements) / len(measurements)

labels = ['32']
values = [mean]

plt.bar(labels, values)
plt.savefig('plot.png')