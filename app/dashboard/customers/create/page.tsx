import CreateCustomerForm from '@/app/ui/customers/CreateCustomerForm';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create customer',
};

export default async function Page() {
  const customers = await fetchCustomers();
  console.log(customers);

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Customers', href: '/dashboard/customers' },
          {
            label: 'Create Customer',
            href: '/dashboard/customers/create',
            active: true,
          },
        ]}
      />
      <CreateCustomerForm customers={customers} />
    </main>
  );
}
