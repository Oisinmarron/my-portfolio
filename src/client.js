// Way to talk to Sanity

import sanityClient from '@sanity/client'

export default sanityClient({
    projectId: "dgjtrd9g", // in studio/sanity.json
    dataset: "production"
})