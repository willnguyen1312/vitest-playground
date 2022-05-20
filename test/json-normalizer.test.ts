import normalize from "json-api-normalizer";

const json = {
  data: [
    {
      type: "annotation",
      id: "52",
      attributes: {
        createdOn: "2022-05-20T03:39:30.733333300Z",
        updatedOn: "2022-05-20T03:41:29.680Z",
        note: "test note sfsdf",
      },
      relationships: {
        case: {
          data: {
            type: "case",
            id: "06320baf-63cd-453f-a468-c2f6d5404666",
          },
        },
        owner: {
          data: {
            type: "user",
            id: "ffabbe34e5d9401aa9184b6e038c555c",
          },
        },
      },
    },
  ],
  included: [
    {
      type: "user",
      id: "ffabbe34-e5d9-401a-a918-4b6e038c555c",
      attributes: {
        badgeNumber: "103",
        firstName: "Tran",
        lastName: "Gi",
      },
      relationships: {
        agency: {
          data: {
            type: "agency",
            id: "3f14cbed-93d8-4627-afab-400f82a38ee1",
          },
        },
      },
      links: {
        self: "/api/v1/agencies/3f14cbed93d84627afab400f82a38ee1/users/ffabbe34e5d9401aa9184b6e038c555c",
      },
    },
    {
      type: "agency",
      id: "3f14cbed-93d8-4627-afab-400f82a38ee1",
      attributes: {
        name: "stran003",
      },
    },
  ],
  meta: {
    offset: 0,
    limit: 100,
    count: 1,
    userCount: 1,
  },
};

describe("json-normalizer function", () => {
  it("should work", () => {
    expect(normalize.default(json)).toMatchInlineSnapshot(`
      {
        "agency": {
          "3f14cbed-93d8-4627-afab-400f82a38ee1": {
            "attributes": {
              "name": "stran003",
            },
            "id": "3f14cbed-93d8-4627-afab-400f82a38ee1",
            "type": "agency",
          },
        },
        "annotation": {
          "52": {
            "attributes": {
              "createdOn": "2022-05-20T03:39:30.733333300Z",
              "note": "test note sfsdf",
              "updatedOn": "2022-05-20T03:41:29.680Z",
            },
            "id": "52",
            "relationships": {
              "case": {
                "data": {
                  "id": "06320baf-63cd-453f-a468-c2f6d5404666",
                  "type": "case",
                },
              },
              "owner": {
                "data": {
                  "id": "ffabbe34e5d9401aa9184b6e038c555c",
                  "type": "user",
                },
              },
            },
            "type": "annotation",
          },
        },
        "user": {
          "ffabbe34-e5d9-401a-a918-4b6e038c555c": {
            "attributes": {
              "badgeNumber": "103",
              "firstName": "Tran",
              "lastName": "Gi",
            },
            "id": "ffabbe34-e5d9-401a-a918-4b6e038c555c",
            "links": {
              "self": "/api/v1/agencies/3f14cbed93d84627afab400f82a38ee1/users/ffabbe34e5d9401aa9184b6e038c555c",
            },
            "relationships": {
              "agency": {
                "data": {
                  "id": "3f14cbed-93d8-4627-afab-400f82a38ee1",
                  "type": "agency",
                },
              },
            },
            "type": "user",
          },
        },
      }
    `);
  });
});
