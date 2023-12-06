import json
import matplotlib.pyplot as plt
import numpy as np
t = []
t.append(2)
t.append(3)
t.append(4)
print(t)
mean_extraction_time = []
mean_verification_time = []
mean_pdp_time = []
files = [4, 8, 16, 32, 64]

for file in files:

    string_file = 'data/measurements/pip-extraction-{}.json'.format(file)
    print(string_file)

    with open(string_file) as f:
        data = json.load(f)
    measurements = data['measurements']
    time= sum(measurements) / len(measurements)
    mean_extraction_time.append(time)

    string_file = 'data/measurements/pip-verification-{}.json'.format(file)
    with open(string_file) as f:
        data = json.load(f)
    measurements = data['measurements']
    time = sum(measurements) / len(measurements)
    mean_verification_time.append(time)

    string_file = 'data/measurements/pdp-{}.json'.format(file)
    with open(string_file) as f:
        data = json.load(f)
    measurements = data['measurements']
    time = sum(measurements) / len(measurements)
    mean_pdp_time.append(time)

labels = ['4', '8', '16', '32', '64']
x = np.arange(len(labels))
plt.bar(x, mean_extraction_time, label='Extraction')
plt.bar(x, mean_verification_time, bottom=mean_extraction_time, label='Verification')
plt.bar(x, mean_pdp_time, bottom=np.array(mean_extraction_time)+np.array(mean_verification_time), label='PDP')

plt.xlabel('Number of attributes per VP')
plt.ylabel('Mean time (ms)')
plt.title('global execution time')
plt.xticks(x, labels)
plt.legend()

plt.savefig('PIP.png')
