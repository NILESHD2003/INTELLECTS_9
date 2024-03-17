package com.example.jobportal;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;
import androidx.appcompat.app.AppCompatActivity;

import com.android.volley.DefaultRetryPolicy;
import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.toolbox.JsonObjectRequest;
import com.android.volley.toolbox.Volley;

import org.json.JSONException;
import org.json.JSONObject;

/** @noinspection ALL*/
public class MainActivity extends AppCompatActivity {


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);


        // Set background color
        findViewById(R.id.main).setBackgroundColor(getResources().getColor(android.R.color.white));

        // Set button color to #197fe6
       Button loginButton = findViewById(R.id.Login_applicant);
      //  loginButton.setBackgroundColor(getResources().getColor(R.color.buttoncolor));

        // Set onClickListener for signup URL
        TextView signupUrlTextView = findViewById(R.id.signup_url);
        signupUrlTextView.setOnClickListener(v -> {
            // Redirect to signup activity
            Intent intent = new Intent(MainActivity.this, MainActivity2_SignUp.class);
            startActivity(intent);
        });

        // Call loginApplicant when login button is clicked
        loginButton.setOnClickListener(v -> loginApplicant());
    }

    // Function to handle applicant login
    private void loginApplicant() {
        EditText emailEditText = findViewById(R.id.enter_email_signup);
        EditText passwordEditText = findViewById(R.id.enter_pass_signup);

        String email = emailEditText.getText().toString();
        String password = passwordEditText.getText().toString();

        // Validate email and password
        if (isValidEmail(email) && isValidPassword(password)) {
            // Perform login action here
            loginUser(email, password);
        } else {
            Toast.makeText(this, "Invalid email or password", Toast.LENGTH_SHORT).show();
        }
    }

    // Function to validate email format
    private boolean isValidEmail(String email) {
        // You can implement your own email validation logic here
        return android.util.Patterns.EMAIL_ADDRESS.matcher(email).matches();
    }

    // Function to validate password (dummy validation in this example)
    private boolean isValidPassword(String password) {
        // Dummy validation (password should be at least 6 characters)
        return password.length() >= 6;
    }

    // Function to handle login API call
    private void loginUser(String email, String password) {
        // Create a JSON object with email and password
        JSONObject jsonParam = new JSONObject();
        try {
            jsonParam.put("email", email);
            jsonParam.put("password", password);
        } catch (JSONException e) {
            Log.w("MainActivity", "JSONException while creating JSON object", e);
            return;
        }

        // Create a request queue using Volley
        RequestQueue requestQueue = Volley.newRequestQueue(this);

        // Create a POST request to the login API endpoint
        JsonObjectRequest jsonObjectRequest = new JsonObjectRequest(Request.Method.POST, "https://intellects-9.onrender.com/api/v1/auth/login", jsonParam, response -> {
            // Handle successful login response
            Toast.makeText(this, "Login successful", Toast.LENGTH_SHORT).show();
            // Redirect to the next activity
           // Intent intent = new Intent(MainActivity.this, MainActivity2_JobPost.class);
         //   startActivity(intent);
        }, error -> {
            // Handle error in login
            Toast.makeText(this, "Login failed", Toast.LENGTH_SHORT).show();
            Log.w("MainActivity", "Volley request failed", error);
        });

        // Set the timeout to Integer.MAX_VALUE
        jsonObjectRequest.setRetryPolicy(new DefaultRetryPolicy(
                Integer.MAX_VALUE,
                DefaultRetryPolicy.DEFAULT_MAX_RETRIES,
                DefaultRetryPolicy.DEFAULT_BACKOFF_MULT));

        // Add the request to the request queue
        requestQueue.add(jsonObjectRequest);
    }

}


