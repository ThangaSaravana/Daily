  int num = 1;
    for (int i = 1; i <= n; i++) { // Loop for rows
        for (int j = 1; j <= i; j++) { // Loop for columns
            cout << num << " ";
            num++;
        }
        cout << endl; // Move to next line after each row
    }
    
    return 0;
