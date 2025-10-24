import java.util.Scanner;
public class RemoveDuplicatesDynamic 
{
    public static int removeDuplicates(int[] nums) 
    {
        if (nums.length == 0) 
        {
            return 0;
        }
        int k = 1;
        for (int i = 1; i < nums.length; i++) 
        {
            if (nums[i] != nums[i - 1]) 
            {
                nums[k] = nums[i];
                k++;
            }
        }
        return k; 
    }
    public static void main(String[] args) 
    {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the number of elements: ");
        int n = sc.nextInt();
        int[] nums = new int[n];
        System.out.println("Enter " + n + " sorted elements:");
        for (int i = 0; i < n; i++) 
        {
            nums[i] = sc.nextInt();
        }
        int k = removeDuplicates(nums);
        System.out.println("\nNumber of unique elements: " + k);
        System.out.print("Array after removing duplicates: ");
        for (int i = 0; i < k; i++) 
        {
            System.out.print(nums[i] + " ");
        }
        sc.close();
    }
}
