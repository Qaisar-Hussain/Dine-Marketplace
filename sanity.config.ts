import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from './sanity/schemas'


const config = defineConfig({
  projectId: "7e5xclrs",
  dataset: "production",
  title: "My Personal Website",
  apiVersion: "2023-03-09",
  plugins: [deskTool()],
  schema: { types: schemas },
  useCdn : true
})

export default config