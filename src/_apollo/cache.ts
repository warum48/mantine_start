import { InMemoryCache, 
    gql
    
  } from "@apollo/client";
  import { RegistrationFields } from "./state/Registration";

  import { createFragmentRegistry } from "@apollo/client/cache";

  
  
  
  export const cache: InMemoryCache = new InMemoryCache({
  
    typePolicies: {
      Query: {
        fields: {
          ...RegistrationFields,
        },
      },
    },
  });
  