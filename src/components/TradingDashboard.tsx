import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { TrendingUp, TrendingDown, AlertTriangle, DollarSign, Activity, BarChart3 } from 'lucide-react';

// Mock data for charts
const generateChartData = (points: number, trend: 'up' | 'down' | 'volatile') => {
  const data = [];
  let value = Math.random() * 100 + 50;
  
  for (let i = 0; i < points; i++) {
    if (trend === 'up') {
      value += (Math.random() - 0.3) * 5;
    } else if (trend === 'down') {
      value += (Math.random() - 0.7) * 5;
    } else {
      value += (Math.random() - 0.5) * 8;
    }
    data.push({ time: i, value: Math.max(0, value) });
  }
  return data;
};

const tradingPairs = [
  { pair: 'EUR/USD', price: '1.0825', change: '+0.23%', trend: 'up' },
  { pair: 'GBP/USD', price: '1.2645', change: '-0.15%', trend: 'down' },
  { pair: 'USD/JPY', price: '149.85', change: '+0.41%', trend: 'up' },
  { pair: 'AUD/USD', price: '0.6589', change: '-0.08%', trend: 'down' },
  { pair: 'USD/CAD', price: '1.3542', change: '+0.12%', trend: 'up' },
  { pair: 'NZD/USD', price: '0.5823', change: '-0.32%', trend: 'down' },
  { pair: 'CHF/USD', price: '0.8745', change: '+0.18%', trend: 'up' }
];

const tradeHistory = [
  { id: 1, pair: 'EUR/USD', type: 'BUY', size: '0.5', entry: '1.0820', exit: '1.0845', pnl: '+$125.00', time: '09:45:22' },
  { id: 2, pair: 'GBP/USD', type: 'SELL', size: '0.3', entry: '1.2660', exit: '1.2640', pnl: '+$60.00', time: '09:32:15' },
  { id: 3, pair: 'USD/JPY', type: 'BUY', size: '0.8', entry: '149.20', exit: '149.85', pnl: '+$520.00', time: '09:18:43' },
  { id: 4, pair: 'AUD/USD', type: 'SELL', size: '0.4', entry: '0.6610', exit: '0.6589', pnl: '+$84.00', time: '08:55:12' },
  { id: 5, pair: 'EUR/USD', type: 'BUY', size: '0.6', entry: '1.0800', exit: '1.0785', pnl: '-$90.00', time: '08:22:38' }
];

export function TradingDashboard() {
  return (
    <div className="min-h-screen bg-background p-4 space-y-4">
      {/* Top 60% - 8 Trading Windows */}
      <div className="h-[60vh] grid grid-cols-4 grid-rows-2 gap-4">
        {/* Regular trading pair windows (1-7) */}
        {tradingPairs.map((trading, index) => (
          <Card key={index} className="relative overflow-hidden border-border/50 hover:border-border transition-colors">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm">{trading.pair}</CardTitle>
                <Badge variant={trading.trend === 'up' ? 'default' : 'destructive'} className="text-xs">
                  {trading.trend === 'up' ? <TrendingUp className="w-3 h-3 mr-1" /> : <TrendingDown className="w-3 h-3 mr-1" />}
                  {trading.change}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="text-lg mb-2">{trading.price}</div>
              <ResponsiveContainer width="100%" height={60}>
                <LineChart data={generateChartData(20, trading.trend as any)}>
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke={trading.trend === 'up' ? '#22c55e' : '#ef4444'} 
                    strokeWidth={1.5}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        ))}

        {/* Main Signal Window (8th) - Takes 2 columns */}
        <Card className="col-span-2 row-span-2 border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-primary/10 relative overflow-hidden">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-primary" />
                <CardTitle className="text-lg">MAIN SIGNAL</CardTitle>
              </div>
              <Badge className="bg-green-500 text-white animate-pulse">
                STRONG BUY
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-muted-foreground">Pair</div>
                  <div className="text-2xl">EUR/USD</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Current Price</div>
                  <div className="text-2xl text-green-500">1.0825</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Target</div>
                  <div className="text-xl">1.0950</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Stop Loss</div>
                  <div className="text-xl text-red-500">1.0780</div>
                </div>
              </div>
              
              <div className="h-32">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={generateChartData(30, 'up')}>
                    <defs>
                      <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <XAxis hide />
                    <YAxis hide />
                    <Area 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#22c55e" 
                      strokeWidth={2}
                      fillOpacity={1} 
                      fill="url(#colorUv)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4" />
                  <span>Confidence: 94%</span>
                </div>
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-4 h-4" />
                  <span>Risk: Medium</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Middle 20% - Trade History Table */}
      <div className="h-[20vh]">
        <Card className="h-full">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="w-5 h-5" />
              Recent Trade History
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="overflow-auto h-[calc(100%-3rem)]">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Pair</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Size</TableHead>
                    <TableHead>Entry</TableHead>
                    <TableHead>Exit</TableHead>
                    <TableHead>P&L</TableHead>
                    <TableHead>Time</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tradeHistory.map((trade) => (
                    <TableRow key={trade.id}>
                      <TableCell>{trade.pair}</TableCell>
                      <TableCell>
                        <Badge variant={trade.type === 'BUY' ? 'default' : 'secondary'}>
                          {trade.type}
                        </Badge>
                      </TableCell>
                      <TableCell>{trade.size}</TableCell>
                      <TableCell>{trade.entry}</TableCell>
                      <TableCell>{trade.exit}</TableCell>
                      <TableCell className={trade.pnl.includes('+') ? 'text-green-500' : 'text-red-500'}>
                        {trade.pnl}
                      </TableCell>
                      <TableCell className="text-muted-foreground">{trade.time}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom 20% - Branding */}
      <div className="h-[20vh]">
        <Card className="h-full bg-gradient-to-r from-primary/10 to-secondary/10 border-border/50">
          <CardContent className="h-full flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="text-2xl">TradePro Signal</h2>
                  <p className="text-muted-foreground">Ultimate Trading Dashboard</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Live Signals Active</span>
                </div>
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4" />
                  <span>Real-time Analysis</span>
                </div>
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-4 h-4" />
                  <span>Advanced Analytics</span>
                </div>
              </div>
              
              <p className="text-xs text-muted-foreground max-w-2xl">
                © 2025 TradePro Signal. Professional trading signals and market analysis platform. 
                Trading involves risk and may not be suitable for all investors.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}