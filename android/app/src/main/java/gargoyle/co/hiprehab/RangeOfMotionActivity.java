package gargoyle.co.hiprehab;

import android.app.Activity;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

import com.firebase.client.Firebase;

import org.joda.time.LocalDate;

import java.util.HashMap;
import java.util.Map;


public class RangeOfMotionActivity extends Activity {

  private EditText mAbductionEdit;
  private EditText mExtensionEdit;
  private EditText mAdductionEdit;
  private Button mSaveButton;

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_range_of_motion);

    mAdductionEdit = (EditText) findViewById(R.id.adductionEdit);
    mAbductionEdit = (EditText) findViewById(R.id.abductionEdit);
    mExtensionEdit = (EditText) findViewById(R.id.extensionEdit);

    mSaveButton = (Button) findViewById(R.id.saveButton);

    mSaveButton.setOnClickListener(new View.OnClickListener() {
      @Override
      public void onClick(View v) {
        Firebase davidRef = new Firebase("https://glowing-fire-8184.firebaseio.com/patients/1/rom");

        LocalDate todaysDate = new LocalDate();
        String todaysDateString = todaysDate.toString("yyyy-MM-dd");

        Map<String, Integer> rangeOfMotionMap = new HashMap<String, Integer>();

        rangeOfMotionMap.put("adduction", parseInt(mAdductionEdit.getText().toString()));
        rangeOfMotionMap.put("abduction", parseInt(mAbductionEdit.getText().toString()));
        rangeOfMotionMap.put("extension", parseInt(mExtensionEdit.getText().toString()));

        davidRef.child(todaysDateString).setValue(rangeOfMotionMap);
      }
    });
  }

  private int parseInt(String s) {
    return Integer.parseInt(s);
  }

  @Override
  public boolean onCreateOptionsMenu(Menu menu) {
    // Inflate the menu; this adds items to the action bar if it is present.
    getMenuInflater().inflate(R.menu.range_of_motion, menu);
    return true;
  }

  @Override
  public boolean onOptionsItemSelected(MenuItem item) {
    // Handle action bar item clicks here. The action bar will
    // automatically handle clicks on the Home/Up button, so long
    // as you specify a parent activity in AndroidManifest.xml.
    int id = item.getItemId();
    if (id == R.id.action_settings) {
      return true;
    }
    return super.onOptionsItemSelected(item);
  }
}
