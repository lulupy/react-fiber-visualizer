export default {
  "currentTree": {
    "tree": {
      "id": 1,
      "children": [
        {
          "id": 4,
          "children": [
            {
              "id": 6,
              "children": [
                {
                  "id": 9,
                  "children": []
                },
                {
                  "id": 10,
                  "children": []
                }
              ]
            },
            {
              "id": 7,
              "children": [
                {
                  "id": 14,
                  "children": []
                },
                {
                  "id": 15,
                  "children": [
                    {
                      "id": 18,
                      "children": []
                    },
                    {
                      "id": 19,
                      "children": []
                    },
                    {
                      "id": 20,
                      "children": []
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    "fibers": {
      "1": {
        "id": 1,
        "tag": "HostRoot",
        "lanes": 0,
        "childLanes": 1,
        "elementType": null,
        "alternate": 1,
        "flags": [
          "Snapshot",
          "LifecycleEffectMask",
          "HostEffectMask"
        ],
        "stateNode": null,
        "effects": [
          4
        ],
        "nextEffects": [],
        "updateQueue": {
          "baseState": {
            "element": {
              "$$typeof": "Symbol(react.element)",
              "type": "function: App",
              "key": null,
              "ref": null,
              "props": {},
              "_owner": null,
              "_store": {}
            }
          },
          "effects": null,
          "_baseUpdateQueue": [],
          "_lastEffect": [],
          "shared": {
            "pending": []
          }
        }
      },
      "4": {
        "id": 4,
        "tag": "ClassComponent",
        "lanes": 0,
        "childLanes": 1,
        "elementType": "App",
        "alternate": 4,
        "flags": [
          "PerformedWork",
          "Update",
          "PlacementAndUpdate",
          "HydratingAndUpdate",
          "LifecycleEffectMask",
          "HostEffectMask"
        ],
        "stateNode": {
          "name": "App",
          "context": {},
          "props": {},
          "refs": {},
          "state": null
        },
        "effects": [],
        "nextEffects": [],
        "updateQueue": {
          "baseState": null,
          "effects": null,
          "_baseUpdateQueue": [],
          "_lastEffect": [],
          "shared": {
            "pending": []
          }
        }
      },
      "6": {
        "id": 6,
        "tag": "ClassComponent",
        "lanes": 0,
        "childLanes": 0,
        "elementType": "Header",
        "alternate": 6,
        "flags": [
          "PerformedWork",
          "HostEffectMask"
        ],
        "stateNode": {
          "name": "Header",
          "context": {},
          "props": {},
          "refs": {},
          "state": null
        },
        "effects": [],
        "nextEffects": [],
        "updateQueue": {
          "baseState": null,
          "effects": null,
          "_baseUpdateQueue": [],
          "_lastEffect": [],
          "shared": {
            "pending": []
          }
        }
      },
      "7": {
        "id": 7,
        "tag": "ClassComponent",
        "lanes": 1,
        "childLanes": 0,
        "elementType": "List",
        "alternate": 7,
        "flags": [
          "PerformedWork",
          "HostEffectMask"
        ],
        "stateNode": {
          "name": "List",
          "context": {},
          "props": {},
          "refs": {},
          "state": {
            "list": [
              "C",
              "A",
              "X"
            ]
          }
        },
        "effects": [],
        "nextEffects": [],
        "updateQueue": {
          "baseState": {
            "list": []
          },
          "effects": null,
          "_baseUpdateQueue": [
            {
              "payload": {
                "list": []
              },
              "callback": null
            }
          ],
          "_lastEffect": [],
          "shared": {
            "pending": []
          }
        }
      },
      "9": {
        "id": 9,
        "tag": "HostComponent",
        "lanes": 0,
        "childLanes": 0,
        "elementType": "h1",
        "flags": [],
        "stateNode": "<h1>title</h1>",
        "effects": [],
        "nextEffects": [],
        "updateQueue": null
      },
      "10": {
        "id": 10,
        "tag": "HostComponent",
        "lanes": 0,
        "childLanes": 0,
        "elementType": "h2",
        "flags": [],
        "stateNode": "<h2>title2</h2>",
        "effects": [],
        "nextEffects": [],
        "updateQueue": null
      },
      "14": {
        "id": 14,
        "tag": "HostComponent",
        "lanes": 0,
        "childLanes": 0,
        "elementType": "button",
        "alternate": 14,
        "flags": [],
        "stateNode": "<button>change</button>",
        "effects": [],
        "nextEffects": [],
        "updateQueue": null
      },
      "15": {
        "id": 15,
        "tag": "HostComponent",
        "lanes": 0,
        "childLanes": 0,
        "elementType": "div",
        "alternate": 15,
        "flags": [],
        "stateNode": "<div class=\"content\"><p>A</p><p>B</p><p>C</p></div>",
        "effects": [],
        "nextEffects": [],
        "updateQueue": null
      },
      "18": {
        "id": 18,
        "tag": "HostComponent",
        "lanes": 0,
        "childLanes": 0,
        "elementType": "p",
        "alternate": 18,
        "flags": [],
        "stateNode": "<p>A</p>",
        "effects": [],
        "nextEffects": [],
        "updateQueue": null
      },
      "19": {
        "id": 19,
        "tag": "HostComponent",
        "lanes": 0,
        "childLanes": 0,
        "elementType": "p",
        "flags": [
          "Deletion",
          "HostEffectMask"
        ],
        "stateNode": "<p>B</p>",
        "effects": [],
        "nextEffects": [],
        "updateQueue": null
      },
      "20": {
        "id": 20,
        "tag": "HostComponent",
        "lanes": 0,
        "childLanes": 0,
        "elementType": "p",
        "alternate": 20,
        "flags": [],
        "stateNode": "<p>C</p>",
        "effects": [],
        "nextEffects": [],
        "updateQueue": null
      }
    }
  },
  "alternateTree": {
    "tree": {
      "id": 1,
      "children": [
        {
          "id": 4,
          "children": [
            {
              "id": 6,
              "children": [
                {
                  "id": 9,
                  "children": []
                },
                {
                  "id": 10,
                  "children": []
                }
              ]
            },
            {
              "id": 7,
              "children": [
                {
                  "id": 14,
                  "children": []
                },
                {
                  "id": 15,
                  "children": [
                    {
                      "id": 20,
                      "children": []
                    },
                    {
                      "id": 18,
                      "children": []
                    },
                    {
                      "id": 37,
                      "children": []
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    "fibers": {
      "1": {
        "id": 1,
        "tag": "HostRoot",
        "lanes": 0,
        "childLanes": 1,
        "elementType": null,
        "alternate": 1,
        "flags": [],
        "stateNode": null,
        "effects": [],
        "nextEffects": [],
        "updateQueue": {
          "baseState": {
            "element": {
              "$$typeof": "Symbol(react.element)",
              "type": "function: App",
              "key": null,
              "ref": null,
              "props": {},
              "_owner": null,
              "_store": {}
            }
          },
          "effects": null,
          "_baseUpdateQueue": [],
          "_lastEffect": [],
          "shared": {
            "pending": []
          }
        }
      },
      "4": {
        "id": 4,
        "tag": "ClassComponent",
        "lanes": 0,
        "childLanes": 1,
        "elementType": "App",
        "alternate": 4,
        "flags": [],
        "stateNode": {
          "name": "App",
          "context": {},
          "props": {},
          "refs": {},
          "state": null
        },
        "effects": [],
        "nextEffects": [],
        "updateQueue": {
          "baseState": null,
          "effects": null,
          "_baseUpdateQueue": [],
          "_lastEffect": [],
          "shared": {
            "pending": []
          }
        }
      },
      "6": {
        "id": 6,
        "tag": "ClassComponent",
        "lanes": 0,
        "childLanes": 0,
        "elementType": "Header",
        "alternate": 6,
        "flags": [],
        "stateNode": {
          "name": "Header",
          "context": {},
          "props": {},
          "refs": {},
          "state": null
        },
        "effects": [],
        "nextEffects": [],
        "updateQueue": {
          "baseState": null,
          "effects": null,
          "_baseUpdateQueue": [],
          "_lastEffect": [],
          "shared": {
            "pending": []
          }
        }
      },
      "7": {
        "id": 7,
        "tag": "ClassComponent",
        "lanes": 0,
        "childLanes": 0,
        "elementType": "List",
        "alternate": 7,
        "flags": [
          "PerformedWork",
          "HostEffectMask"
        ],
        "stateNode": {
          "name": "List",
          "context": {},
          "props": {},
          "refs": {},
          "state": {
            "list": [
              "C",
              "A",
              "X"
            ]
          }
        },
        "effects": [],
        "nextEffects": [],
        "updateQueue": {
          "baseState": {
            "list": []
          },
          "effects": null,
          "_baseUpdateQueue": [],
          "_lastEffect": [],
          "shared": {
            "pending": []
          }
        }
      },
      "9": {
        "id": 9,
        "tag": "HostComponent",
        "lanes": 0,
        "childLanes": 0,
        "elementType": "h1",
        "flags": [],
        "stateNode": "<h1>title</h1>",
        "effects": [],
        "nextEffects": [],
        "updateQueue": null
      },
      "10": {
        "id": 10,
        "tag": "HostComponent",
        "lanes": 0,
        "childLanes": 0,
        "elementType": "h2",
        "flags": [],
        "stateNode": "<h2>title2</h2>",
        "effects": [],
        "nextEffects": [],
        "updateQueue": null
      },
      "14": {
        "id": 14,
        "tag": "HostComponent",
        "lanes": 0,
        "childLanes": 0,
        "elementType": "button",
        "alternate": 14,
        "flags": [],
        "stateNode": "<button>change</button>",
        "effects": [],
        "nextEffects": [],
        "updateQueue": null
      },
      "15": {
        "id": 15,
        "tag": "HostComponent",
        "lanes": 0,
        "childLanes": 0,
        "elementType": "div",
        "alternate": 15,
        "flags": [],
        "stateNode": "<div class=\"content\"><p>A</p><p>B</p><p>C</p></div>",
        "effects": [
          19
        ],
        "nextEffects": [],
        "updateQueue": null
      },
      "18": {
        "id": 18,
        "tag": "HostComponent",
        "lanes": 0,
        "childLanes": 0,
        "elementType": "p",
        "alternate": 18,
        "flags": [
          "Placement",
          "PlacementAndUpdate",
          "HostEffectMask"
        ],
        "stateNode": "<p>A</p>",
        "effects": [],
        "nextEffects": [],
        "updateQueue": null
      },
      "20": {
        "id": 20,
        "tag": "HostComponent",
        "lanes": 0,
        "childLanes": 0,
        "elementType": "p",
        "alternate": 20,
        "flags": [],
        "stateNode": "<p>C</p>",
        "effects": [],
        "nextEffects": [],
        "updateQueue": null
      },
      "37": {
        "id": 37,
        "tag": "HostComponent",
        "lanes": 1,
        "childLanes": 0,
        "elementType": "p",
        "flags": [
          "Placement",
          "PlacementAndUpdate",
          "HostEffectMask"
        ],
        "effects": [],
        "nextEffects": [],
        "updateQueue": null
      }
    }
  },
  "workInProgress": 18,
  "note": "回溯阶段"
}