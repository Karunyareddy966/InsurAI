import java.util.Scanner;
public class LoopingProgram 
{
    public static void main(String[] args) 
    {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number to reverse: ");
        int num = sc.nextInt();
        int rev = 0;
        int temp = num;
        do 
        {
            int digit = num % 10;
            rev = rev * 10 + digit;
            num /= 10;
        } while (num != 0);
        System.out.println("Reverse of " + temp + " is: " + rev);
        sc.close();
    }
}
