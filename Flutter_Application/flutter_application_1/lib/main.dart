import 'package:flutter/material.dart';

void main() {
  runApp(const CalculatorApp());
}

class CalculatorApp extends StatelessWidget {
  const CalculatorApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Simple Calculator',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.teal),
        useMaterial3: true,
      ),
      home: const CalculatorPage(),
    );
  }
}

class CalculatorPage extends StatefulWidget {
  const CalculatorPage({super.key});

  @override
  State<CalculatorPage> createState() => _CalculatorPageState();
}

class _CalculatorPageState extends State<CalculatorPage> {
  final TextEditingController _controller1 = TextEditingController();
  final TextEditingController _controller2 = TextEditingController();

  double? _result;

  void _calculate(String operation) {
    final num1 = double.tryParse(_controller1.text);
    final num2 = double.tryParse(_controller2.text);

    if (num1 == null || num2 == null) {
      setState(() {
        _result = null;
      });
      return;
    }

    setState(() {
      switch (operation) {
        case '+':
          _result = num1 + num2;
          break;
        case '-':
          _result = num1 - num2;
          break;
        case '×':
          _result = num1 * num2;
          break;
        case '÷':
          _result = num2 != 0 ? num1 / num2 : double.nan;
          break;
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Simple Calculator'),
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
      ),
      body: Padding(
        padding: const EdgeInsets.all(20.0),
        child: Column(
          children: [
            TextField(
              controller: _controller1,
              keyboardType: TextInputType.number,
              decoration: const InputDecoration(labelText: 'Enter first number'),
            ),
            const SizedBox(height: 10),
            TextField(
              controller: _controller2,
              keyboardType: TextInputType.number,
              decoration: const InputDecoration(labelText: 'Enter second number'),
            ),
            const SizedBox(height: 20),
            Wrap(
              spacing: 15,
              children: [
                ElevatedButton(
                  onPressed: () => _calculate('+'),
                  child: const Text('+'),
                ),
                ElevatedButton(
                  onPressed: () => _calculate('-'),
                  child: const Text('-'),
                ),
                ElevatedButton(
                  onPressed: () => _calculate('×'),
                  child: const Text('×'),
                ),
                ElevatedButton(
                  onPressed: () => _calculate('÷'),
                  child: const Text('÷'),
                ),
              ],
            ),
            const SizedBox(height: 30),
            if (_result != null)
              Text(
                'Result: ${_result!.isNaN ? "Cannot divide by zero" : _result!.toStringAsFixed(2)}',
                style: const TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
              ),
          ],
        ),
      ),
    );
  }
}
