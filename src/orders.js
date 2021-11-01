import {Page, Card, DataTable} from '@shopify/polaris';
import { useSelector } from 'react-redux';



function DataTableExample() {
    let data = useSelector(state => state)
    return (
        <Page>
        <Card>
          <DataTable
            columnContentTypes={[
              'text',
              'date',
              'numeric',
              'numeric',
            ]}
            headings={[
              'Customer Name',
              'Date',
              'id',
              'Price',
            ]}
            rows={data}
          />
        </Card>
        </Page>
    );
  }

export default DataTableExample;
