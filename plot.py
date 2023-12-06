import json
import matplotlib.pyplot as plt
labels_PIP = []
values_PIP = []
label_PDP = []
values_PDP = []
files = [4, 8, 16, 32, 64]
for file in files:
    string_file = 'data/measurements/{}-pip.json'.format(file)
    with open(string_file) as f:
        data = json.load(f)
    measurements = data['measurements']
    mean = sum(measurements) / len(measurements)
    labels_PIP.append(str(file))
    values_PIP.append(mean)

    string_file = 'data/measurements/{}-pdp.json'.format(file)
    with open(string_file) as f:
        data = json.load(f)
    measurements = data['measurements']
    mean = sum(measurements) / len(measurements)
    label_PDP.append(str(file))
    values_PDP.append(mean)


plt.barh(labels_PIP, values_PIP, height=0.4)
plt.xlabel('Mean time (ms)')
plt.ylabel('Number of attributes per VP')
plt.title('PIP execution time(verification + attributes extraction)')
plt.savefig('PIP.png')

plt.clf()
plt.barh(label_PDP, values_PDP, height=0.4)
plt.xlabel('Mean time (ms)')
plt.ylabel('Number of attributes per Policy')
plt.title('PDP execution time')
plt.savefig('PDP.png')

