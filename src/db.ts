
type attributesList = Record<string, Record<string, { attribute: string, dataType: string, value: string }[]>>;
type resourcesList = Record<string, attributesList>;

export const resources: resourcesList =

{
    "research-paper-computer-science": {
        "https://api.npoint.io/92e56cd3a26b31bfcd14":
        {
            "#0": [
                {
                    attribute: "credentialSubject.degreeLevel",
                    dataType: "http://www.w3.org/2001/XMLSchema#string",
                    value: "PhD"
                },
                {
                    attribute: "credentialSubject.degreeField",
                    dataType: "http://www.w3.org/2001/XMLSchema#string",
                    value: "Computer Science"
                }
            ]
        }
    },
    "course-material": {
        "https://api.npoint.io/92e56cd3a26b31bfcd14":
        {
            "#0": [{
                attribute: "credentialSubject.degreeLevel",
                dataType: "http://www.w3.org/2001/XMLSchema#string",
                value: "PhD"
            }]
        }
    },
    "conference": {
        "https://api.npoint.io/92e56cd3a26b31bfcd14": // degree credential
        {
            "#0": [{
                attribute: "credentialSubject.degreeLevel",
                dataType: "http://www.w3.org/2001/XMLSchema#string",
                value: "PhD"
            }]
        },
        "https://api.npoint.io/292a45521e356ed0174b": // vaccine credential
        {
            "#0": [{
                attribute: "credentialSubject.vaccineType",
                dataType: "http://www.w3.org/2001/XMLSchema#string",
                value: "Full"
            }]
        }
    },
    "coding.course": {
        "https://beta.api.schemas.serto.id/v1/public/program-completion-certificate/1.0/json-schema.json":
        {
            "#0": [{
                attribute: "credentialSubject.achievement",
                dataType: "http://www.w3.org/2001/XMLSchema#string",
                value: "Certified Solidity Developer 2"
            }],
            "#1": [{
                attribute: "credentialSubject.achievement",
                dataType: "http://www.w3.org/2001/XMLSchema#string",
                value: "Certified Java Developer"
            }]
        }
    },
    "resource32": {
        "test-schema.org": {
            "#0": [{
                attribute: "credentialSubject.attribute0",
                dataType: "http://www.w3.org/2001/XMLSchema#string",
                value: "value0"
            },
            {
                attribute: "credentialSubject.attribute1",
                dataType: "http://www.w3.org/2001/XMLSchema#string",
                value: "value1"
            },
            {
                attribute: "credentialSubject.attribute2",
                dataType: "http://www.w3.org/2001/XMLSchema#string",
                value: "value2"
            },
            {
                attribute: "credentialSubject.attribute3",
                dataType: "http://www.w3.org/2001/XMLSchema#string",
                value: "value3"
            },
            {
                attribute: "credentialSubject.attribute4",
                dataType: "http://www.w3.org/2001/XMLSchema#string",
                value: "value4"
            },
            {
                attribute: "credentialSubject.attribute5",
                dataType: "http://www.w3.org/2001/XMLSchema#string",
                value: "value5"
            },
            {
                attribute: "credentialSubject.attribute6",
                dataType: "http://www.w3.org/2001/XMLSchema#string",
                value: "value6"
            },
            {
                attribute: "credentialSubject.attribute7",
                dataType: "http://www.w3.org/2001/XMLSchema#string",
                value: "value7"
            },
            {
                attribute: "credentialSubject.attribute8",
                dataType: "http://www.w3.org/2001/XMLSchema#string",
                value: "value8"
            },
            {
                attribute: "credentialSubject.attribute9",
                dataType: "http://www.w3.org/2001/XMLSchema#string",
                value: "value9"
            },
            {
                attribute: "credentialSubject.attribute10",
                dataType: "http://www.w3.org/2001/XMLSchema#string",
                value: "value10"
            },
            {
                attribute: "credentialSubject.attribute11",
                dataType: "http://www.w3.org/2001/XMLSchema#string",
                value: "value11"
            },
            {
                attribute: "credentialSubject.attribute12",
                dataType: "http://www.w3.org/2001/XMLSchema#string",
                value: "value12"
            },
            {
                attribute: "credentialSubject.attribute13",
                dataType: "http://www.w3.org/2001/XMLSchema#string",
                value: "value13"
            },
            {
                attribute: "credentialSubject.attribute14",
                dataType: "http://www.w3.org/2001/XMLSchema#string",
                value: "value14"
            },
            {
                attribute: "credentialSubject.attribute15",
                dataType: "http://www.w3.org/2001/XMLSchema#string",
                value: "value15"
            },
            {
                attribute: "credentialSubject.attribute16",
                dataType: "http://www.w3.org/2001/XMLSchema#string",
                value: "value16"
            },
            {
                attribute: "credentialSubject.attribute17",
                dataType: "http://www.w3.org/2001/XMLSchema#string",
                value: "value17"
            },
            {
                attribute: "credentialSubject.attribute18",
                dataType: "http://www.w3.org/2001/XMLSchema#string",
                value: "value18"
            },
            {
                attribute: "credentialSubject.attribute19",
                dataType: "http://www.w3.org/2001/XMLSchema#string",
                value: "value19"
            },
            {
                attribute: "credentialSubject.attribute20",
                dataType: "http://www.w3.org/2001/XMLSchema#string",
                value: "value20"
            },
            {
                attribute: "credentialSubject.attribute21",
                dataType: "http://www.w3.org/2001/XMLSchema#string",
                value: "value21"
            },
            {
                attribute: "credentialSubject.attribute22",
                dataType: "http://www.w3.org/2001/XMLSchema#string",
                value: "value22"
            },
            {
                attribute: "credentialSubject.attribute23",
                dataType: "http://www.w3.org/2001/XMLSchema#string",
                value: "value23"
            },
            {
                attribute: "credentialSubject.attribute24",
                dataType: "http://www.w3.org/2001/XMLSchema#string",
                value: "value24"
            },
            {
                attribute: "credentialSubject.attribute25",
                dataType: "http://www.w3.org/2001/XMLSchema#string",
                value: "value25"
            },
            {
                attribute: "credentialSubject.attribute26",
                dataType: "http://www.w3.org/2001/XMLSchema#string",
                value: "value26"
            },
            {
                attribute: "credentialSubject.attribute27",
                dataType: "http://www.w3.org/2001/XMLSchema#string",
                value: "value27"
            },
            {
                attribute: "credentialSubject.attribute28",
                dataType: "http://www.w3.org/2001/XMLSchema#string",
                value: "value28"
            },
            {
                attribute: "credentialSubject.attribute29",
                dataType: "http://www.w3.org/2001/XMLSchema#string",
                value: "value29"
            },
            {
                attribute: "credentialSubject.attribute30",
                dataType: "http://www.w3.org/2001/XMLSchema#string",
                value: "value30"
            },
            {
                attribute: "credentialSubject.attribute31",
                dataType: "http://www.w3.org/2001/XMLSchema#string",
                value: "value31"
            }
            ],
        }
    }
};