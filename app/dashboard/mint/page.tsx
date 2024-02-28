import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MintPage() {
  return (
    <Tabs className="w-full max-w-2xl" defaultValue="erc20">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="erc20">ERC-20</TabsTrigger>
        <TabsTrigger value="erc721">ERC-721</TabsTrigger>
        <TabsTrigger value="erc1155">ERC-1155</TabsTrigger>
      </TabsList>
      <TabsContent value="erc20">
        <Card>
          <CardHeader>
            <CardTitle>Mint ERC-20</CardTitle>
            <CardDescription>
              ERC-20 is the base standard for minting fungible tokens which are
              interchangeable with each other.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Token Name</Label>
              <Input defaultValue="My ERC-20 Token" id="name" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="symbol">Symbol</Label>
              <Input defaultValue="ERC20" id="symbol" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="totalSupply">Total Supply</Label>
              <Input defaultValue="1000000" id="totalSupply" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Mint ERC-20</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="erc721">
        <Card>
          <CardHeader>
            <CardTitle>Mint ERC-721</CardTitle>
            <CardDescription>
              ERC-721 token standard enables minting non-fungible tokens (NFT),
              which are unique and not interchangeable.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Token Name</Label>
              <Input defaultValue="My ERC-721 Token" id="name" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="symbol">Symbol</Label>
              <Input defaultValue="ERC721" id="symbol" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="totalSupply">Total Supply</Label>
              <Input defaultValue="1000" id="totalSupply" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Mint ERC-1155</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="erc1155">
        <Card>
          <CardHeader>
            <CardTitle>ERC-1155 Token</CardTitle>
            <CardDescription>
              ERC-1155 token standard enables a more flexible mechanism which
              represents multiple token types at once.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Token Name</Label>
              <Input defaultValue="My ERC-1155 Token" id="name" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="symbol">Symbol</Label>
              <Input defaultValue="ERC1155" id="symbol" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="totalSupply">Total Supply</Label>
              <Input defaultValue="5000" id="totalSupply" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Mint Token</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
