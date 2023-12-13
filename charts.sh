# clear the content of the file measure.txt
rm -r measurements/4/
rm -r measurements/8/
rm -r measurements/16/
rm -r measurements/32/
rm -r measurements/64/

echo "" > measurements/DID.txt
echo "" > measurements/pdp.txt
echo "" > measurements/pip-extraction.txt
echo "" > measurements/pip-verification.txt
artillery run artillery-tests/test-4.yml
mkdir measurements/4/
cp measurements/DID.txt measurements/4/DID-4.txt
cp measurements/pdp.txt measurements/4/pdp-4.txt
cp measurements/pip-extraction.txt measurements/4/pip-extraction-4.txt
cp measurements/pip-verification.txt measurements/4/pip-verification-4.txt

echo "" > measurements/DID.txt
echo "" > measurements/pdp.txt
echo "" > measurements/pip-extraction.txt
echo "" > measurements/pip-verification.txt
artillery run artillery-tests/test-8.yml
mkdir measurements/8/
cp measurements/DID.txt measurements/8/DID-8.txt
cp measurements/pdp.txt measurements/8/pdp-8.txt
cp measurements/pip-extraction.txt measurements/8/pip-extraction-8.txt
cp measurements/pip-verification.txt measurements/8/pip-verification-8.txt

echo "" > measurements/DID.txt
echo "" > measurements/pdp.txt
echo "" > measurements/pip-extraction.txt
echo "" > measurements/pip-verification.txt
artillery run artillery-tests/test-16.yml
mkdir measurements/16/
cp measurements/DID.txt measurements/16/DID-16.txt
cp measurements/pdp.txt measurements/16/pdp-16.txt
cp measurements/pip-extraction.txt measurements/16/pip-extraction-16.txt
cp measurements/pip-verification.txt measurements/16/pip-verification-16.txt

echo "" > measurements/DID.txt
echo "" > measurements/pdp.txt
echo "" > measurements/pip-extraction.txt
echo "" > measurements/pip-verification.txt
artillery run artillery-tests/test-32.yml
mkdir measurements/32/
cp measurements/DID.txt measurements/32/DID-32.txt
cp measurements/pdp.txt measurements/32/pdp-32.txt
cp measurements/pip-extraction.txt measurements/32/pip-extraction-32.txt
cp measurements/pip-verification.txt measurements/32/pip-verification-32.txt

echo "" > measurements/DID.txt
echo "" > measurements/pdp.txt
echo "" > measurements/pip-extraction.txt
echo "" > measurements/pip-verification.txt
artillery run artillery-tests/test-64.yml
mkdir measurements/64/
cp measurements/DID.txt measurements/64/DID-64.txt
cp measurements/pdp.txt measurements/64/pdp-64.txt
cp measurements/pip-extraction.txt measurements/64/pip-extraction-64.txt
cp measurements/pip-verification.txt measurements/64/pip-verification-64.txt

