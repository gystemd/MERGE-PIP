
type attributesList = Record<string, Record<string, { attribute: string, dataType: string, value: string }[]>>;
type resourcesList = Record<string, attributesList>;

export const resources: resourcesList =

{
    "resource-multiple-1": {
        "test-schema.org": {
            "#0": [{ attribute: "credentialSubject.attribute0", dataType: "http://www.w3.org/2001/XMLSchema#string", value: "value0" }],
        }
    },
    "resource-multiple-2": {
        "test-schema.org": {
            "#0": [{ attribute: "credentialSubject.attribute0", dataType: "http://www.w3.org/2001/XMLSchema#string", value: "value0" }],
            "#1": [{ attribute: "credentialSubject.attribute1", dataType: "http://www.w3.org/2001/XMLSchema#string", value: "value1" }],
        }
    },
    "resource-multiple-3": {
        "test-schema.org": {
            "#0": [{ attribute: "credentialSubject.attribute0", dataType: "http://www.w3.org/2001/XMLSchema#string", value: "value0" }],
            "#1": [{ attribute: "credentialSubject.attribute1", dataType: "http://www.w3.org/2001/XMLSchema#string", value: "value1" }],
            "#2": [{ attribute: "credentialSubject.attribute2", dataType: "http://www.w3.org/2001/XMLSchema#string", value: "value2" }],
        }
    },
    "resource-multiple-4": {
        "test-schema.org": {
            "#0": [{ attribute: "credentialSubject.attribute0", dataType: "http://www.w3.org/2001/XMLSchema#string", value: "value0" }],
            "#1": [{ attribute: "credentialSubject.attribute1", dataType: "http://www.w3.org/2001/XMLSchema#string", value: "value1" }],
            "#2": [{ attribute: "credentialSubject.attribute2", dataType: "http://www.w3.org/2001/XMLSchema#string", value: "value2" }],
            "#3": [{ attribute: "credentialSubject.attribute3", dataType: "http://www.w3.org/2001/XMLSchema#string", value: "value3" }],
        }
    },
    "resource-multiple-5": {
        "test-schema.org": {
            "#0": [{ attribute: "credentialSubject.attribute0", dataType: "http://www.w3.org/2001/XMLSchema#string", value: "value0" }],
            "#1": [{ attribute: "credentialSubject.attribute1", dataType: "http://www.w3.org/2001/XMLSchema#string", value: "value1" }],
            "#2": [{ attribute: "credentialSubject.attribute2", dataType: "http://www.w3.org/2001/XMLSchema#string", value: "value2" }],
            "#3": [{ attribute: "credentialSubject.attribute3", dataType: "http://www.w3.org/2001/XMLSchema#string", value: "value3" }],
            "#4": [{ attribute: "credentialSubject.attribute4", dataType: "http://www.w3.org/2001/XMLSchema#string", value: "value4" }]
        }
    },
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

    "resource4": {
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
            }
            ]
        }
    },

    "resource8": {
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
            }
            ]
        }
    },
    "resource16": {
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
            }
            ]
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
    },
    "resource64": {
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
            },
            {
                attribute: "credentialSubject.attribute32",
                dataType: "http://www.w3.org/2001/XMLSchema#string",
                value: "value32"
            },
            {
                attribute: "credentialSubject.attribute33",
                dataType: "http://www.w3.org/2001/XMLSchema#string",
                value: "value33"
            },
            {
                attribute: "credentialSubject.attribute34",
                dataType: "http://www.w3.org/2001/XMLSchema#string",
                value: "value34"
            },
            {
                attribute: "credentialSubject.attribute35",
                dataType: "http://www.w3.org/2001/XMLSchema#string",
                value: "value35"
            },
            {
                attribute: "credentialSubject.attribute36",
                dataType: "http://www.w3.org/2001/XMLSchema#string",
                value: "value36"
            },
            {
                attribute: "credentialSubject.attribute37",
                dataType: "http://www.w3.org/2001/XMLSchema#string",
                value: "value37"
            },
            {
                attribute: "credentialSubject.attribute38",
                dataType: "http://www.w3.org/2001/XMLSchema#string",
                value: "value38"
            },
            {
                attribute: "credentialSubject.attribute39",
                dataType: "http://www.w3.org/2001/XMLSchema#string",
                value: "value39"
            },
            {
                attribute: "credentialSubject.attribute40",
                dataType: "http://www.w3.org/2001/XMLSchema#string",
                value: "value40"
            },
            {
                attribute: "credentialSubject.attribute41",
                dataType: "http://www.w3.org/2001/XMLSchema#string",
                value: "value41"
            },
            {
                attribute: "credentialSubject.attribute42",
                dataType: "http://www.w3.org/2001/XMLSchema#string",
                value: "value42"
            },
            {
                attribute: "credentialSubject.attribute43",
                dataType: "http://www.w3.org/2001/XMLSchema#string",
                value: "value43"
            },
            {
                attribute: "credentialSubject.attribute44",
                dataType: "http://www.w3.org/2001/XMLSchema#string",
                value: "value44"
            },
            {
                attribute: "credentialSubject.attribute45",
                dataType: "http://www.w3.org/2001/XMLSchema#string",
                value: "value45"
            },
            {
                attribute: "credentialSubject.attribute46",
                dataType: "http://www.w3.org/2001/XMLSchema#string",
                value: "value46"
            },
            {
                attribute: "credentialSubject.attribute47",
                dataType: "http://www.w3.org/2001/XMLSchema#string",
                value: "value47"
            },
            {
                attribute: "credentialSubject.attribute48",
                dataType: "http://www.w3.org/2001/XMLSchema#string",
                value: "value48"
            },
            {
                attribute: "credentialSubject.attribute49",
                dataType: "http://www.w3.org/2001/XMLSchema#string",
                value: "value49"
            },
            {
                attribute: "credentialSubject.attribute50",
                dataType: "http://www.w3.org/2001/XMLSchema#string",
                value: "value50"
            },
            {
                attribute: "credentialSubject.attribute51",
                dataType: "http://www.w3.org/2001/XMLSchema#string",
                value: "value51"
            },
            {
                attribute: "credentialSubject.attribute52",
                dataType: "http://www.w3.org/2001/XMLSchema#string",
                value: "value52"
            },
            {
                attribute: "credentialSubject.attribute53",
                dataType: "http://www.w3.org/2001/XMLSchema#string",
                value: "value53"
            },
            {
                attribute: "credentialSubject.attribute54",
                dataType: "http://www.w3.org/2001/XMLSchema#string",
                value: "value54"
            },
            {
                attribute: "credentialSubject.attribute55",
                dataType: "http://www.w3.org/2001/XMLSchema#string",
                value: "value55"
            },
            {
                attribute: "credentialSubject.attribute56",
                dataType: "http://www.w3.org/2001/XMLSchema#string",
                value: "value56"
            },
            {
                attribute: "credentialSubject.attribute57",
                dataType: "http://www.w3.org/2001/XMLSchema#string",
                value: "value57"
            },
            {
                attribute: "credentialSubject.attribute58",
                dataType: "http://www.w3.org/2001/XMLSchema#string",
                value: "value58"
            },
            {
                attribute: "credentialSubject.attribute59",
                dataType: "http://www.w3.org/2001/XMLSchema#string",
                value: "value59"
            },
            {
                attribute: "credentialSubject.attribute60",
                dataType: "http://www.w3.org/2001/XMLSchema#string",
                value: "value60"
            },
            {
                attribute: "credentialSubject.attribute61",
                dataType: "http://www.w3.org/2001/XMLSchema#string",
                value: "value61"
            },
            {
                attribute: "credentialSubject.attribute62",
                dataType: "http://www.w3.org/2001/XMLSchema#string",
                value: "value62"
            },
            {
                attribute: "credentialSubject.attribute63",
                dataType: "http://www.w3.org/2001/XMLSchema#string",
                value: "value63"
            }
            ]
        }
    },
};