import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.white,
        leading: MaterialButton(
          onPressed: () {},
          child: SvgPicture.asset(
            'assets/svg/svgexport-5.svg',
          ),
        ),
        title: Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            SvgPicture.asset(
              'assets/svg/svgexport-1.svg',
              color: Colors.deepPurple,
              height: 30.0,
            ),
            const SizedBox(width: 10.0),
            const Flexible(
              child: Text(
                'Tech Talent',
                style: TextStyle(
                  color: Colors.black,
                ),
              ),
            ),
          ],
        ),
        centerTitle: true,
        actions: [
          MaterialButton(
            minWidth: 60.0,
            onPressed: () {},
            child: SvgPicture.asset(
              'assets/svg/svgexport-6.svg',
            ),
          ),
        ],
      ),
      body: SingleChildScrollView(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.start,
          children: [
            const SizedBox(height: 20.0),
            Image.asset('assets/images/tt.png'),
            const SizedBox(height: 30.0),
            RichText(
              textAlign: TextAlign.center,
              text: const TextSpan(
                style: TextStyle(
                  fontSize: 24.0,
                  fontWeight: FontWeight.bold,
                  color: Color(0xFF171725),
                ),
                children: [
                  TextSpan(text: 'Do you want to join\n'),
                  TextSpan(
                    children: [
                      TextSpan(text: 'the '),
                      TextSpan(
                        text: 'Tech Talent ',
                        style: TextStyle(
                          color: Color(0xFF0062ff),
                        ),
                      ),
                      TextSpan(text: 'platform?'),
                    ],
                  ),
                ],
              ),
            ),
            const SizedBox(height: 20.0),
            const Text('Submit your contact information '),
            const Text('and we will contact you shortly'),
            const SizedBox(height: 20.0),
            MaterialButton(
              onPressed: () {},
              shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(10.0),
              ),
              minWidth: MediaQuery.of(context).size.width * 0.6,
              height: 70.0,
              color: const Color(0xFF6667e2),
              child: const Text(
                'Register here',
                style: TextStyle(
                  color: Colors.white,
                  fontSize: 16.0,
                ),
              ),
            ),
            const SizedBox(height: 30.0),
            Container(
              height: 150,
              color: Color(0xFFf6f8fb),
              child: ListView.builder(
                scrollDirection: Axis.horizontal,
                itemCount: 5,
                itemBuilder: (context, index) {
                  return Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 50.0),
                    child: SvgPicture.asset(
                      'assets/svg/svgexport-1.svg',
                      color: Colors.purpleAccent,
                    ),
                  );
                },
              ),
            )
          ],
        ),
      ),
    );
  }
}
