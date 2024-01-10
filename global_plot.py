
import matplotlib.pyplot as plt
import numpy as np

def calculate_mean_time(file_path):
    try:
        with open(file_path) as f:
            measurements = f.readlines()
        measurements = [int(x.strip()) for x in measurements[1:]]
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
    extraction_file_path = f'measurements/{file}/pip-extraction-{file}.txt'
    mean_extraction_time.append(calculate_mean_time(extraction_file_path))

    verification_file_path = f'measurements/{file}/pip-verification-{file}.txt'
    mean_verification_time.append(calculate_mean_time(verification_file_path))

    pdp_file_path = f'measurements/{file}/pdp-{file}.txt'
    mean_pdp_time.append(calculate_mean_time(pdp_file_path))

    did_file_path = f'measurements/{file}/DID-{file}.txt'
    mean_did_time.append(calculate_mean_time(did_file_path))

mean_centralized_pdp_time = []
mean_centralized_pip_time = []
for file in files:
    print (file)
    pdp_file_path = f'centralized_measurements/{file}/pdp-{file}.txt'
    mean_centralized_pdp_time.append(calculate_mean_time(pdp_file_path))

    pip_file_path = f'centralized_measurements/{file}/pip-{file}.txt'
    mean_centralized_pip_time.append(calculate_mean_time(pip_file_path))

print(mean_centralized_pip_time)
print(mean_centralized_pdp_time)

labels = ['4', '8', '16', '32', '64']
x = np.arange(len(labels))
color = 'blue'  # Specify the desired color
plt.bar(x, mean_did_time, color=color, width=0.3)
plt.bar(x, mean_verification_time, bottom=mean_did_time, color=color, width=0.3)
plt.bar(x, mean_extraction_time, bottom=np.array(mean_did_time) + np.array(mean_verification_time), color=color, width=0.3)
plt.bar(x, mean_pdp_time, bottom=np.array(mean_did_time) + np.array(mean_verification_time) + np.array(mean_extraction_time), color=color, width=0.3, label='SSI + XACML')
color = 'red'
plt.bar(x+0.3, mean_centralized_pip_time, color=color, width=0.3)
plt.bar(x+0.3, mean_centralized_pdp_time, bottom=mean_centralized_pip_time, color=color, width=0.3, label = 'centralized (5 DBs)')
plt.xlabel('Number of attributes')
plt.ylabel('Mean time (ms)')
plt.title('global execution time')
plt.xticks(x, labels)
plt.legend()

plt.savefig('figures/comparison.png')


