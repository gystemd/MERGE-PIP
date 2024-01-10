import matplotlib.pyplot as plt
import numpy as np

def calculate_mean_time(file_path):
    try:
        with open(file_path) as f:
            measurements = f.readlines()
        measurements = [int(x.strip()) for x in measurements[1:-1]]
        return sum(measurements) / len(measurements)
    except FileNotFoundError:
        print(f"File {file_path} not found.")
        return 0

mean_did_time = []
mean_verification_time = []
mean_extraction_time = []
mean_pdp_time = []
files = [4, 8, 16, 32, 64]

for file in files:
    extraction_file_path = f'measurements/{file}/extraction.txt'
    mean_extraction_time.append(calculate_mean_time(extraction_file_path))

    verification_file_path = f'measurements/{file}/verification.txt'
    mean_verification_time.append(calculate_mean_time(verification_file_path))

    pdp_file_path = f'measurements/{file}/pdp.txt'
    mean_pdp_time.append(calculate_mean_time(pdp_file_path))

    did_file_path = f'measurements/{file}/did.txt'
    mean_did_time.append(calculate_mean_time(did_file_path))

labels = ['4', '8', '16', '32', '64']
x = np.arange(len(labels))
plt.bar(x, mean_did_time, label='DID resolution')
plt.bar(x, mean_verification_time, bottom=mean_did_time, label='verification')
plt.bar(x, mean_extraction_time, bottom=np.array(mean_did_time) + np.array(mean_verification_time), label='attributes extraction')
plt.bar(x, mean_pdp_time, bottom=np.array(mean_did_time) + np.array(mean_verification_time) + np.array(mean_extraction_time), label='PDP')
plt.xlabel('Number of attributes per VP')
plt.ylabel('Mean time (ms)')
plt.xticks(x, labels)
plt.legend()

plt.savefig('figures/chart.png')

plt.clf()

# draw a pie chart for every number of attributes
for file in files:
    extraction_file_path = f'measurements/{file}/extraction.txt'
    mean_extraction_time = calculate_mean_time(extraction_file_path)

    verification_file_path = f'measurements/{file}/verification.txt'
    mean_verification_time = calculate_mean_time(verification_file_path)

    pdp_file_path = f'measurements/{file}/pdp.txt'
    mean_pdp_time = calculate_mean_time(pdp_file_path)

    did_file_path = f'measurements/{file}/did.txt'
    mean_did_time = calculate_mean_time(did_file_path)

    labels = ['DID resolution', 'verification', 'attributes extraction', 'PDP']
    sizes = [mean_did_time, mean_verification_time, mean_extraction_time, mean_pdp_time]
    percentages = [s/sum(sizes)*100 for s in sizes]
    legend_labels = ['{0} - {1:1.1f} %'.format(i,j) for i,j in zip(labels, percentages)]
    plt.pie(sizes, startangle=90)
    plt.legend( legend_labels, bbox_to_anchor=(-0.40, 1),loc='upper left')
    plt.savefig(f'figures/pie-{file}.png')
    plt.clf()
