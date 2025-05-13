import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function BitcoinWallet() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold text-gray-800">Hello Sergio,</h1>
          <p className="text-gray-600 max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam.
          </p>
        </div>

        <div className="space-y-4 mt-8">
          <h2 className="text-base font-medium">Enter your Bitcoin wallet address</h2>
          <div className="flex flex-col sm:flex-row gap-3">
            <Input className="flex-1" placeholder="Example: 1x1zPsj5z2oMPTTLSzLmc7DvhNa" />
            <Button className="bg-navy-blue hover:bg-navy-blue/90 text-white">Save</Button>
          </div>
        </div>

        <div className="mt-10 space-y-2">
          <h2 className="text-base font-medium">Your contracts</h2>
          <p className="text-sm text-gray-500">Lorem ipsum</p>

          <div className="overflow-x-auto mt-2">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Contract ID</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Total Hashrate</TableHead>
                  <TableHead>Total Bitcoin</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>BTCMN001</TableCell>
                  <TableCell>Active</TableCell>
                  <TableCell>800TH</TableCell>
                  <TableCell>0.2 BTC</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>BTCMN002</TableCell>
                  <TableCell>Pending</TableCell>
                  <TableCell>250TH</TableCell>
                  <TableCell>Pending Activation</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  )
}
